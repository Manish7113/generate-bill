
import React, { useRef } from 'react';


const App = () => {
  const sectionRef = useRef(null);
  // const sectionRef = useRef<HTMLElement>(null);

  const handlePrint = () => {
    if (sectionRef.current) {
      const printContents = sectionRef.current.innerHTML;
      const printWindow = window.open('', '_blank');
     
      if(printWindow){
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Print Section</title>
              <style>
                /* Add any styles you want for the printed content here */
                *{
                margin :0px;
                padding : 0px;
                }
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0px;
                  display : flex;
                  justify-content : start;
                  align-items : start;
                  flex-direction : column;
                  width : 100%;
                  font-size : 12px;
                  font-weight : bold;
                }
              </style>
            </head>
            <body onload="window.print(); window.close();">
              ${printContents}
            </body>
          </html>
        `);
        printWindow.document.close();

      }
    }
  };

  return (
    <div className='flex justify-center items-center w-full'>

    <div className='flex justify-center items-start flex-col w-[300px] gap-4'>
      {/* Button to trigger print */}
      

      {/* Section to print */}
      <div ref={sectionRef} style={{ marginTop: '20px' }} className='w-[300px] bg-foreground p-2 rounded-md'>
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center',gap:'5px' }}  >
          <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center', marginBottom : '10px'}} className='flex flex-col justify-center items-center mb-5'>

        <p style={{margin : '0px', marginBottom : '5px'}} className='font-semibold text-lg'>--- Shree ---</p>
        <p style={{margin : '0px', marginBottom : '5px'}} className='font-semibold text-lg'>Gaytri Restaurant</p>
        <p style={{margin : '0px', marginBottom : '5px' , textAlign : 'center'}} className='font-semibold text-lg'>A-9/16 Mahakal Vanijay Kendra Nanakheda Ujjain</p>
        <p style={{margin : '0px', marginBottom : '5px', textAlign : 'center'}} className='font-semibold text-lg'>8821894148, 07343553082</p>
        
          </div>

        {/* heading of bill */}
        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center', marginBottom : '5px'}} >
          <p className='font-semibold text-md'>Item</p>
          <p className='font-semibold text-md text-start w-[60px] '>Price</p>
        </div>
        {/* items of bill should be run through map */}
        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}} >
          <p className='font-semibold text-md'>Tea</p>
          <p className='font-semibold text-md text-start w-[50px]'>10</p>
        </div>
        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}} >
          <p className='font-semibold text-md'>Coffee</p>
          <p className='font-semibold text-md text-start w-[50px]'>25</p>
        </div>
        {/* horizontal line */}
        <div style={{width : '100%', borderBottom : '1px solid black', marginBottom : '5px', marginTop : '5px' }} className='border border-[1px] border-text-light w-full my-2'></div>

        {/* total */}
        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center',marginBottom : '100px'}} >
          <p className='font-semibold text-md'>Total</p>
          <p className='font-semibold text-md text-start w-[50px]'>130</p>
        </div>
        </div>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handlePrint}>Print</button>
    </div>
    </div>
  );
};

export default App;