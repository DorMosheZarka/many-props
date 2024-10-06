import { createBoard } from '@wixc3/react-board';
import { ManyProps } from '../../../src/components/many-props/many-props';

export default createBoard({
    name: 'ManyProps',
    Board: () => (
        <ManyProps
            className="my-class"
            boolRequired={true}
            nillRequired={null}
            unDefinedRequired={undefined}
            numRequired={42}
            strRequired="required string"
            reactElementRequired={<div>React Element</div>}
            reactNodeArrRequired={[<span>Node 1</span>, <span>Node 2</span>]}
            boolArrRequired={[true, false]}
            nillArrRequired={[null, null]}
            unDefinedArrRequired={[undefined, undefined]}
            numArrRequired={[1, 2, 3]}
            strArrRequired={['one', 'two', 'three']}
            style={{ color: 'blue' }}
            onClick={() => console.log('Clicked')}
            role="button"
            aria-label="Accessible Label"
            tabIndex={0}
            id="unique-id"
            title="Sample Title"
            hidden={false}
            draggable={true}
            lang="en"
        />
    ),
});
