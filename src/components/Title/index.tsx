import React from 'react';

type Props = {
    children: string | any,
    as: string | any,
}

export default function Title({children, as}: Props) {
    const Tag = as;

    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: blue;
                }
            `}</style>
        </React.Fragment>
    )
}