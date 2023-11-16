

# reactjs / LEGO / functional
  > reusability > DRY, lose coupling
  > composition
  > decoration
  > HoC
  > props drill down




   <Square size={100} color="green" place={[50,100]}>
   - size
   - color
   - coords
  +---------+
  |         |
  |         |
  |         |
  +---------+





  <Square 
    size={100} 
    color="green"    ------- packed ---- props {color:..., size: ..., ...}
    place={[50,100]}                       |
    />                                     |
    -------------------------Square(     props    )---------------------------------
                                           |
                                      destructuring
                            {color="black", size=100, place=[0,0]} <- default
                                           |
                                           |
                                        color = ..
                                        size = ..
                                        place = [..]
                                           | 
                                          JSX
                                           |
                                      return(render)
                                           |
                                           v








## OOP (DRY) : inheritance | composition

     <Shape ... /> -- common
        |
        +
      /   \
     /     \
    /       \
   /         \
  /           \
<Square../> <Triangle../>  -- specific

> composition ofera mai multa flexibilitate decit inheritance









### Functional (DRY) : association
   !! think about MORE THAN LOGIC splitting !!
   !! think also about splutting the TEMPLATE!!
     <Shape ... /> -- common
        |
        +
      /   \
     /     \
    /       \
   /         \
  /           \
<Square../> <Triangle../>  -- specific












           {
            place: ..
            size: ..
            color: ..
           }
           |
           |
           v
Square ( props )
           |
           +---> {
           |      color: ..
           |      size:...
           |      }   
           | +-- children = <div..>
           | |
           v v
Shape ( props )
           |
           |
           + -- > {
                  children:..
                  place:..
           }

HW1: try to draw a hexagon - the same way 