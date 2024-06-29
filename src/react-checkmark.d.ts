declare module 'react-checkmark' {
    import { FC } from 'react';
  
    interface CheckmarkProps {
      size?: string;
      color?: string;
      duration?: number;
    }
  
    export const Checkmark: FC<CheckmarkProps>;
  }