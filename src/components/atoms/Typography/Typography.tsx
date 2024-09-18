import type { CSSProperties, ElementType } from 'react';
import { useMemo } from 'react';
import { forwardRef } from 'react';

import { theme } from '@/styles';

import { typographyVariant, fontWeights, textAlignments, verticalAlignments, inlineElement } from './Typography.css';
import type { PolymorphicRef, TypographyTypes } from './Typography.types';

const inlineElements = [
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'br',
  'cite',
  'code',
  'dfn',
  'em',
  'i',
  'img',
  'input',
  'kbd',
  'label',
  'mark',
  'q',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'u',
  'var',
  'button',
];

const Typography = forwardRef(
  <T extends ElementType = 'span'>(
    {
      as,
      color = theme.colors.text['100'],
      textAlign = 'left',
      verticalAlign = 'middle',
      variant = 'body1',
      weight = 'normal',
      children,
      className,
      style,
      ...rest
    }: TypographyTypes<T>,
    ref: PolymorphicRef<ElementType>['ref'],
  ) => {
    const Element = as || 'span';

    const isInlineElement = inlineElements.includes(String(as));

    const variantValue = typographyVariant[variant];
    const weightValue = fontWeights[weight];
    const textAlignValue = textAlignments[textAlign];
    const verticalAlignValue = verticalAlignments[verticalAlign];

    const mergedStyle: CSSProperties = useMemo(
      () => ({
        ...style,
        color,
      }),
      [color, style],
    );

    return (
      <Element
        ref={ref}
        className={`${variantValue} ${weightValue} ${textAlignValue} ${verticalAlignValue} ${className || ''} ${isInlineElement ? inlineElement : ''}`}
        style={mergedStyle}
        {...rest}
      >
        {children}
      </Element>
    );
  },
);

Typography.displayName = 'Typography';

export default Typography;
