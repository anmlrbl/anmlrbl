import Link from "next/link";

const NextLink = React.forwardRef(({ className, href, as, children }, ref) => (
  <Link href={href} as={as}>
    <a ref={ref} className={className}>
      {children}
    </a>
  </Link>
));

export default NextLink;
