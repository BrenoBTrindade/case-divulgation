import NextLink from "next/link";

type Props = {
    href: string,
    children: string | any,
}

export default function Link({children, href, ...props}: Props) {
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    )
}