import React from 'react';
import Article from '@/app/_components/RichText/Article';
import { TextBlockProps } from './types';

// destructure textblock props in a new reaction functional component
export function TextBlock(props: TextBlockProps): JSX.Element {
    const { richText } = props;
    return <Article content={richText} />;
};
