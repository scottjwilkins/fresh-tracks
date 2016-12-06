import React from 'react';

export default () => {
  return (
    <div>
      <form>
        <h1 className="titles">Beverages</h1>
            <p><input type="checkbox" value="lavender lemonade" />Lavender Lemonade + Pekoe Iced Tea $1.25</p>
            <p><input type="checkbox" value="coffee bar" />Coffee Bar (regular, decaf, sweeteners, cream & mugs) $1.75</p>
            <p><input type="checkbox" value="beverage package" />(Beverage package: lemonade, iced tea & coffee $2.75)</p>
            <p><input type="checkbox" value="infused waters" />Infused Waters: grapefruit/rosemary and strawberry/lemon/basil $1.00</p>
            <p><input type="checkbox" value="bar mixers" />Bar Mixers + garnish $1.75</p>
      </form>
    </div>
  )
}
