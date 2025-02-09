import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router";

import { forwardRef, ReactElement, Ref } from "react";

type LinkProps = Omit<ReactRouterLinkProps, "to"> & {
  href: ReactRouterLinkProps["to"];
};

const Link = forwardRef(
  ({ href, ...linkProps }: LinkProps, ref: Ref<HTMLAnchorElement>) => {
    return <ReactRouterLink ref={ref} to={href} {...linkProps} />;
  }
) as (props: LinkProps & { ref?: Ref<HTMLAnchorElement> }) => ReactElement;

export { Link };
