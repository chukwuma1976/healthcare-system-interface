import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

function PrintComponent({template}) {
    const componentRef = useRef()
  return (
    <div>
    {/* button to trigger printing of target component */}
    <ReactToPrint
      trigger={() => <button>Print this out!</button>}
      content={() => componentRef.current}
    />

    {/* component to be printed */}
    <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} props={template}/>
    </div>
  </div>
  )
}
export default PrintComponent
