import { renderBlock } from './lib.js'

export function renderSearchFormBlock (checkin: Date, checkout?: Date) : void {
  const thatDay = checkin;
  thatDay.setDate(thatDay.getDate()+1);
  const minCheckin = new Date(thatDay.getDate()+','+(thatDay.getMonth()+1)+','+thatDay.getFullYear());

  thatDay.setDate(thatDay.getDate()+2);
  const minCheckout = new Date(thatDay.getDate()+','+(thatDay.getMonth()+1)+','+thatDay.getFullYear());

  thatDay.setDate(thatDay.getDate()+30);
  thatDay.setMonth(thatDay.getMonth()+1);
  const maxCheckout = new Date(thatDay.getDate()+','+(thatDay.getMonth()+2)+','+thatDay.getFullYear());

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${minCheckin} min="2021-09-11" max="2021-10-30"  name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${checkout} min=${minCheckout} max=${maxCheckout} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
