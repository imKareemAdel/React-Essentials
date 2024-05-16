import Section from "./Section.jsx";
import TabButton from "./TabButton"
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "./data.js";
import { useState } from "react";
export default function Examples (){
    const [selectedTopic, setSelectedTopic]=useState()
  
    function handleSelect(selectedButton){
  
        setSelectedTopic(selectedButton)
        //console.log(selectedButton)
    }
    let tabContent= <p>please chooice topic</p>;
    if (selectedTopic) {
       tabContent = ( <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
  
    </div>
    )}

    return(

        <Section title='examples' id='examples'>
            <Tabs  
             buttons={<>
             <TabButton isSelected={ selectedTopic === 'components'} 
                onClick={() =>handleSelect('components')}>components</TabButton>
            <TabButton isSelected={ selectedTopic === 'jsx'} 
                onClick={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={ selectedTopic === 'props'} 
                onClick={() =>handleSelect('props')}>props</TabButton>
            <TabButton isSelected={ selectedTopic === 'state'} 
               onClick={() =>handleSelect('state')}>state</TabButton></>
        } >
            {tabContent}
            </Tabs>
        
     
      </Section>
    )
}