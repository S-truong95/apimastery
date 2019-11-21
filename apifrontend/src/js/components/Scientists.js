export default function Scientists(scientists) {
    return `  
    <p id="instructions">Go to Field to Add a Scientist by Field</p>
    <p id="instructions">Click on Images for Details</p>
    <section id="wrapper">
    ${scientists
      .map(scientist => {
        return `
        
             <section class="scientistgrid">
             <ul>             
                <img src=${scientist.image} class="scientistIMG"></img>
                <h4>${scientist.name}</h4>                               
                <h4><input class="scientist_id" type="hidden" value="${scientist.id}"></h4>          
                
              </ul>
               </section>
             
        `;
      })
      .join("")} 
      </section>

    `;
}    