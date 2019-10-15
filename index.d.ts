declare module 'react-native-swipe-gestures' {
  import { Component } from 'react';
  import {
    PanResponderGestureState,
    ViewProps
  } from 'react-native';

  export interface GestureRecognizerProps extends ViewProps {
    config?: GestureRecognizerConfig;
    onSwipe?(gestureName: string, gestureState: PanResponderGestureState): void;
    onSwipeUp?(gestureState: PanResponderGestureState): void;
    onSwipeDown?(gestureState: PanResponderGestureState): void;
    onSwipeLeft?(gestureState: PanResponderGestureState): void;
    onSwipeRight?(gestureState: PanResponderGestureState): void;
  }

  interface GestureRecognizerConfig {
    /**
     * Velocity that has to be breached in order for swipe to be triggered (vx and vy properties of gestureState)
     * @default 0.3
     */
    velocityThreshold?: number;

    /**
     * Absolute offset that shouldn't be breached for swipe to be triggered (dy for horizontal swipe, dx for vertical swipe)
     * @default 80
     */
    directionalOffsetThreshold?: number;

    /**
     * Absolute distance that should be breached for the gesture to not be considered a click (dx or dy properties of gestureState)
     * @default 5
     */
    gestureIsClickThreshold?: number;

    /**
     * Should detect swipe up
     * @default true
     */
    detectSwipeUp?: boolean;

    /**
     * Should detect swipe down
     * @default true
     */
    detectSwipeDown?: boolean;

    /**
     * Should detect swipe right
     * @default true
     */
    detectSwipRight?: boolean;

    /**
     * Should detect swipe left
     * @default true
     */
    detectSwipeLeft?: boolean;
  }

  class GestureRecognizer extends Component<GestureRecognizerProps> {}

  export default GestureRecognizer;
}
