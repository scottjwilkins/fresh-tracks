import React from 'react';

export default () => {
  return (
    <div>
      <form>
        <h1 className="titles">Sides</h1>
        <h5 className="sample-titles">(choose 1 for $3.75, 2 for $7.25, 3 for $10)</h5>
            <p><input type="checkbox" value="assorted grilled veggies" />Assorted grilled veggies/lemon/extra virgin olive oil (gf)</p>
            <p><input type="checkbox" value="rainbow carrots" />Red curry rainbow carrots/ginger English pea butter (gf)</p>
            <p><input type="checkbox" value="brussel sprouts" />Crispy Brussels sprouts/pepper bacon/caramelized shallot (gf)</p>
            <p><input type="checkbox" value="goat cheese potato gratin" />Lemon + Goat Cheese Potato Gratin/sweet onion/basil (gf)</p>
            <p><input type="checkbox" value="hatch chili" />Roasted Hatch Chili + Asadero Cheese Potato Gratin/sweet onion/cilantro (spicy!) (gf)</p>
            <p><input type="checkbox" value="eggplant and tomato gratin" />Eggplant + Tomato gratin/Italian herbs/bread crumbs/Parmesan (gf)</p>
            <p><input type="checkbox" value="twice baked potato" />Twice Baked Potato/pepper bacon/Asadero cheese/scallion/sour cream (gf)</p>
            <p><input type="checkbox" value="fresh crudite" />Fresh Crudité Platter/fresh veggies (gf)</p>
            <p><input type="checkbox" value="cheesy cauliflower" />Cheesy cauliflower gratin (gf)</p>
            <p><input type="checkbox" value="roasted broccoli" />Roasted broccoli/parmesan/roasted garlic emulsion (gf)</p>
            <p><input type="checkbox" value="vegetable kebabs" />Vegetable kebabs/lemon/garlic/oregano marinade (gf)</p>
            <p><input type="checkbox" value="dirty rice" />Southern style dirty brown rice/Creole spices/bruinoise veggies/herbs/roasted tomato (gf)</p>
      </form>
    </div>
  )
}
