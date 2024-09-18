import type { ComponentPropsWithRef, ElementType, HTMLAttributes } from 'react';

export type TypographyVariant = 'display1' | 'display2' | 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'caption' | 'overline';
export type TypographyWeight = 'normal' | 'bold';

export interface TypographyTypes<T extends ElementType> extends HTMLAttributes<HTMLElement> {
  as?: T;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
