import type React from "react";

import { WidgetContainer, WidgetTitle, WidgetContent } from './Widget.styles';

type WidgetProps = {
  title: string;
  children: React.ReactNode;
};

const Widget = ({ title, children }: WidgetProps) => {
  
  return (
    <WidgetContainer>
      <WidgetTitle>{title}</WidgetTitle>
      <WidgetContent>
        {children}
      </WidgetContent>
    </WidgetContainer>
  );
};

export default Widget;
