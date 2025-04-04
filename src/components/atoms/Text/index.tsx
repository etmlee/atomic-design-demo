import React, {PropsWithChildren} from 'react';
import {cn} from '@/lib/utils';

interface TextProps {
  className?: string;
}

export const MainHeading: React.FC<PropsWithChildren<TextProps>> = ({children, className}) => (
  <h1 className={cn('text-4xl font-bold text-neutral-900', className)}>{children}</h1>
)

export const SubHeading: React.FC<PropsWithChildren<TextProps>> = ({children, className}) => (
  <h1 className={cn('text-2xl font-bold text-neutral-900', className)}>{children}</h1>
)

export const BodyText: React.FC<PropsWithChildren<TextProps>> = ({children, className}) => (
  <p className={cn('text-lg text-neutral-800', className)}>{children}</p>
)

export const SmallText: React.FC<PropsWithChildren<TextProps>> = ({children, className}) => (
  <p className={cn('text-sm text-neutral-700', className)}>{children}</p>
)