$procedure .= '<select name="pa_procedure" />';  


  
// get all the terms belonging to the 'material' attribute  
$terms = get_terms( 'pa_procedure', 'hide_empty=0' );  
  
// loop through these terms and output in an unordered list  
foreach ($terms as $term) :  
      
    // get the URL  
    $term_link = get_term_link( $term->slug, 'pa_procedure' );  
      
    $procedure .=  '<option value="'.$term->name.'">'.$term->name.'</option>';  
      
endforeach;  

  
$procedure .=  '</select>'; 