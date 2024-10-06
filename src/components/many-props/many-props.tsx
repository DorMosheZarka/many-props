import styles from './many-props.module.scss';
import cx from 'classnames';

export interface ManyPropsProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    boolOptional?: boolean;
    nillOptional?: null;
    unDefinedOptional?: undefined;
    numOptional?: number;
    strOptional?: string;
    reactElementOptional?: React.ReactElement;
    reactNodeArrOptional?: React.ReactNode[];
    boolArrOptional?: boolean[];
    nillArrOptional?: null[];
    unDefinedArrOptional?: undefined[];
    numArrOptional?: number[];
    strArrOptional?: string[];

    // Required props
    boolRequired: boolean;
    nillRequired: null;
    unDefinedRequired: undefined;
    numRequired: number;
    strRequired: string;
    reactElementRequired: React.ReactElement;
    reactNodeArrRequired: React.ReactNode[];
    boolArrRequired: boolean[];
    nillArrRequired: null[];
    unDefinedArrRequired: undefined[];
    numArrRequired: number[];
    strArrRequired: string[];

    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    role?: string;
    'aria-label'?: string;
}

export const ManyProps = ({
    className,
    boolOptional,
    nillOptional,
    unDefinedOptional,
    numOptional,
    strOptional,
    reactElementOptional,
    reactNodeArrOptional,
    boolRequired,
    nillRequired,
    unDefinedRequired,
    numRequired,
    strRequired,
    reactElementRequired,
    reactNodeArrRequired,
    style,
    onClick,
    role,
    'aria-label': ariaLabel,
    ...restProps
}: ManyPropsProps) => {
    const propNamesWithTypes = [
        { name: 'boolRequired', type: 'boolean', propValue: boolRequired },
        { name: 'nillRequired', type: 'null', propValue: nillRequired },
        { name: 'unDefinedRequired', type: 'undefined', propValue: unDefinedRequired },
        { name: 'numRequired', type: 'number', propValue: numRequired },
        { name: 'strRequired', type: 'string', propValue: strRequired },
        {
            name: 'reactElementRequired',
            type: 'React.ReactElement',
            propValue: reactElementRequired,
        },
        {
            name: 'reactNodeArrRequired',
            type: 'React.ReactNode[]',
            propValue: reactNodeArrRequired,
        },
        { name: 'boolOptional', type: 'boolean', propValue: boolOptional },
        { name: 'nillOptional', type: 'null', propValue: nillOptional },
        { name: 'unDefinedOptional', type: 'undefined', propValue: unDefinedOptional },
        { name: 'numOptional', type: 'number', propValue: numOptional },
        { name: 'strOptional', type: 'string', propValue: strOptional },
        {
            name: 'reactElementOptional',
            type: 'React.ReactElement',
            propValue: reactElementOptional,
        },
        {
            name: 'reactNodeArrOptional',
            type: 'React.ReactNode[]',
            propValue: reactNodeArrOptional,
        },
    ];

    return (
        <div
            className={cx(styles.root, className)}
            style={style}
            onClick={onClick}
            role={role}
            aria-label={ariaLabel}
            {...restProps}
        >
            <ul className={styles.list}>
                {propNamesWithTypes.map((prop) => (
                    <li key={prop.name}>
                        <span>{prop.name}</span>: {prop.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};
