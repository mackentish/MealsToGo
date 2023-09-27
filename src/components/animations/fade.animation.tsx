import React, { useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";

export default function FadeInView({
  duration = 1500,
  children,
  props,
}: {
  duration?: number;
  children: React.ReactNode;
  props?: ViewProps;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);
  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
        },
        props && props.style,
      ]}
    >
      {children}
    </Animated.View>
  );
}
