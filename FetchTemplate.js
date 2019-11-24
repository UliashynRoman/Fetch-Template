function loadData(e) {
    e.preventDefault();

    let url = 'http://';
    console.log(url);


    fetch(url)
          .then(function(response){
               console.log(response);
               return response.json();
               
          })
          .then(function(data){
               console.log(data);
              let html = '<h2>Generated Data</h2>';
               html += '<ul class="list">';
               data.forEach(function(data_row) {
                    html += `
                         <li>${data_row.row}</li>
                    `;
               });
               html += '</ul>';

               document.querySelector('#result').innerHTML = html;
          })
          .catch(function(error){
               console.log(error);
          })
    
}