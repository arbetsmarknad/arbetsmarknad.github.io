import * as React from "react";
import { FC, ReactElement } from "react";
import { cn } from "./utils";

export type DescriptionListProps = {
  children:
    | ReactElement<DescriptionItemProps>
    | ReactElement<DescriptionItemProps>[];
  className?: string;
};

export const DescriptionList: FC<DescriptionListProps> = ({
  children,
  className,
}) => {
  return <dl className={cn(className)}>{children}</dl>;
};

export type DescriptionItemProps = {
  children:
    | ReactElement<DescriptionTermProps>
    | ReactElement<DescriptionDetailsProps>[];
};

export const DescriptionItem: FC<DescriptionItemProps> = ({ children }) => {
  return <>{children}</>;
};

export type DescriptionTermProps = {
  children: ReactElement | ReactElement[] | string;
  className?: string;
};

export const DescriptionTerm: FC<DescriptionTermProps> = ({
  children,
  className,
}) => {
  return <dt className={cn(className)}>{children}</dt>;
};

export type DescriptionDetailsProps = {
  children: ReactElement | ReactElement[] | string;
  className?: string;
};

export const DescriptionDetails: FC<DescriptionDetailsProps> = ({
  children,
  className,
}) => {
  return <dd className={cn("mb-4", className)}>{children}</dd>;
};
