db.<collection-name>.aggregate([
   {
      "$facet":{
         "dist_count":[
            {
               "$group":{
                  "_id":"$<field-name>"
               }
            }
         ],
         "count":[
            {
               "$count":"count"
            }
         ]
      }
   },
   {
      "$addFields":{
         "dist_count":{
            "$size":"$dist_count"
         },
         "count":{
            "$first":"$count.count"
         }
      }
   }
]);
