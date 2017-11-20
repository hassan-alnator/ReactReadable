import React from 'react';
import { Button } from 'react-materialize'

const Toolbar = () => (
    <Button floating fab='vertical' icon='add' className='green' large style={{ bottom: '45px', right: '24px' }}>
        <Button floating icon='subject' className='blue' />
    </Button>
)

export default Toolbar;