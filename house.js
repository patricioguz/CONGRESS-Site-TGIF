$(document).ready (
    
    function(){
        cargar_json();
        function cargar_json ()
        {
            let dataHouseHTML='';
            let dataHouseTotal='';
            let dataHouseStat ='';

            let sumaD=0;
            let sumaR=0;
            let sumaI=0;

            let contadorD = 0;
            let contadorR = 0;
            let contadorI = 0;

            let promedioD = 0;
            let promedioR = 0;
            let promedioI = 0;

            $.getJSON('house.json', function (dataHouse){
                dataHouseTotal=dataHouse.results[0].members.length;
            
            for (i=0;i<dataHouse.results[0].members.length;i++)
            {
                
                if(dataHouse.results[0].members[i].party=="D"){
                    sumaD = sumaD+dataHouse.results[0].members[i].votes_with_party_pct;
                    contadorD++;
                    
                }
                else if(dataHouse.results[0].members[i].party=="R"){
                    sumaR = sumaR+dataHouse.results[0].members[i].votes_with_party_pct;
                    contadorR++;
                }
                else {
                    sumaI = sumaI+dataHouse.results[0].members[i].votes_with_party_pct;
                    contadorI++;
                }

                dataHouseHTML += '<tr>';
                if(dataHouse.results[0].members[i].middle_name!=null){
                    dataHouseHTML += '<td>' + '<a href='+dataHouse.results[0].members[i].url +' target="_blank">'+ dataHouse.results[0].members[i].first_name+" "+dataHouse.results[0].members[i].middle_name+
                    " "+dataHouse.results[0].members[i].last_name+'</a></td>';
                }
                else{
                    dataHouseHTML += '<td>' + '<a href='+dataHouse.results[0].members[i].url +' target="_blank">'+ dataHouse.results[0].members[i].first_name+" "+dataHouse.results[0].members[i].last_name;'</a></td>';
                }
                
                dataHouseHTML += '<td>' + dataHouse.results[0].members[i].party;'</td>';
                dataHouseHTML += '<td>' + dataHouse.results[0].members[i].state;'</td>';
                dataHouseHTML += '<td>' + dataHouse.results[0].members[i].seniority;'</td>';
                dataHouseHTML += '<td>' + dataHouse.results[0].members[i].votes_with_party_pct;'</td>';
                dataHouseHTML += '</tr>';
            }
                promedioD = sumaD/contadorD;
                promedioR = sumaR/contadorR;
                if(contadorI==0)
                promedioI=0
                else
                promedioI = sumaI/contadorI;
                    
                dataHouseStat +='<tr>';
                dataHouseStat +='<th>'+ 'Democrat Party';'</th>';
                dataHouseStat +='<td>'+  contadorD;'</td>';
                dataHouseStat +='<td>'+  promedioD.toFixed(2);'</td>';
                dataHouseStat +='</tr>';

                dataHouseStat +='<tr>';
                dataHouseStat +='<th>'+ 'Republican Party';'</th>';
                dataHouseStat +='<td>'+  contadorR;'</td>';
                dataHouseStat +='<td>'+  promedioR.toFixed(2);'</td>';
                dataHouseStat +='</tr>';

                dataHouseStat +='<tr>';
                dataHouseStat +='<th>'+ 'Independent Party';'</th>';
                dataHouseStat +='<td>'+  contadorI;'</td>';
                dataHouseStat +='<td>'+  promedioI.toFixed(2);'</td>';
                dataHouseStat +='</tr>';
        
            $('#'+'houseId').html(dataHouseHTML);
            $('#'+'membersHouseId').html(dataHouseTotal);
            $('#'+'statHouseId').html(dataHouseStat)
            })

        }
    }

)


