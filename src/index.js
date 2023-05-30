import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import "./index.css";
import SData from './SData';

ReactDom.render(
<>
<h1> NETFLIX SERIES :-</h1>
<section className='series'>
<Card
imgsrc={SData[0].imgsrc}
sname= {SData[0].sname}
link= {SData[0].link}  />
<Card 
  imgsrc={SData[1].imgsrc}
sname= {SData[1].sname}
link= {SData[1].link} 
/>
<Card 
  imgsrc={SData[2].imgsrc}
sname= {SData[2].sname}
link= {SData[2].link} 
/>

<Card 
  imgsrc={SData[3].imgsrc}
sname= {SData[3].sname}
link= {SData[3].link} 
/>
</section>
<section className='series2'>
<Card 
 imgsrc={SData[4].imgsrc}
sname= {SData[4].sname}
link= {SData[4].link} 
/>
<Card 
 imgsrc={SData[5].imgsrc}
sname= {SData[5].sname}
link= {SData[5].link} 
/>
<Card 
  imgsrc={SData[6].imgsrc}
sname= {SData[6].sname}
link= {SData[6].link} 
/>
<Card 
 imgsrc={SData[7].imgsrc}
sname= {SData[7].sname}
link= {SData[7].link} 
/>
</section>
<section className='series3'>
<Card 
  imgsrc={SData[8].imgsrc}
sname= {SData[8].sname}
link= {SData[8].link} 
/>
<Card 
 imgsrc={SData[9].imgsrc}
sname= {SData[9].sname}
link= {SData[9].link} 
/>
<Card 
  imgsrc={SData[10].imgsrc}
sname= {SData[10].sname}
link= {SData[10].link} 
/>
<Card 
 imgsrc={SData[11].imgsrc}
sname= {SData[11].sname}
link= {SData[11].link} 
/>
</section>
</> , 
document.getElementById('root'));
