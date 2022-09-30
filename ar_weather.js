var coordinates = {}
$(document).ready(function(){
    getCoordinates();
})
function getCoordinates(){
    var devide = new URLSearchParams(window.location.search)
    if(devide.has('source')&& devide.has('destination')){
        var source = devide.get('source')
        var destination = devide.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lng = source.split(';')[1]
        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lng = destination.split(';')[1]

        
    } else{
        alert("no coordinates provided")
        window.history.back()
    }

}
