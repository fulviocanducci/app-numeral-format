//http://numeraljs.com/#locales

import React, { ReactNode } from 'react';
import numeral from 'numeral';
import 'numeral/locales';

export const format = {
  money: '$0,0.00',
  bytes: '0 a',
};

interface UiNumeralProps {
  format: string;
  value?: number | string | undefined;
  children?: ReactNode | string | undefined;
}

numeral.locale('pt-br');

function UiNumeral({ format, value, children }: UiNumeralProps) {
  const v = value || children;
  return <>{numeral(v).format(format)}</>;
}

export default UiNumeral;
