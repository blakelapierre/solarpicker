import { h, render } from 'preact-cycle';
import Papa from 'papaparse';

function init() {
  if (!localStorage) {
    alert('No localStorage!!!! new key will not be saved!');
  }
  else {
  }
}

const batteriesUrl = `${window.location.href}batteries`;

const {
  INIT,
  SORT_BATTERIES
} = {
  INIT: (_, mutation) => {
    _.inited = true;
    _.mutation = mutation;

    _.batteries = [];
    _.batteriesSortDir = 1;

    Papa.parse(batteriesUrl, {
      download: true,
      worker: true,
      header: true,
      dynamicTyping: true,
      step: (results) => {
        console.log(results);
	if (results.data) {
	  results.data['watt-hours'] = results.data.voltage * results.data['amp-hours'];
	  results.data['wattHoursPerDollar'] =  results.data['watt-hours'] / results.data.price;
	  mutation(_ => (_.batteries.push(results.data), _))();
	}
      }
    });
  },

  SORT_BATTERIES: (_, attribute, dir = 1) => {
    _.batteriesSortDir = dir;
    _.batteries = _.batteries.sort((a, b) => {
      if (a[attribute] < b[attribute]) return -dir;
      if (b[attribute] < a[attribute]) return dir;
      return 0;
    });
    return _;
  }
};

const INIT_GUI = ({}, {inited, mutation}) => inited ? <GUI /> : mutation(INIT)(mutation);

const GUI = ({}, {batteries, batteriesSortDir, mutation}) => (
  <gui>
    <batteries>
      <thead>
	<th onClick={mutation(SORT_BATTERIES, 'type', -batteriesSortDir)}>Type</th>
	<th onClick={mutation(SORT_BATTERIES, 'voltage', -batteriesSortDir)}>Voltage</th>
	<th onClick={mutation(SORT_BATTERIES, 'amp-hours', -batteriesSortDir)}>Amp-Hours</th>
	<th onClick={mutation(SORT_BATTERIES, 'watt-hours', -batteriesSortDir)}>Watt-Hours</th>
	<th onClick={mutation(SORT_BATTERIES, 'price', -batteriesSortDir)}>Price</th>
	<th onClick={mutation(SORT_BATTERIES, 'wattHoursPerDollar', -batteriesSortDir)}>Watt-Hours / $</th>
	<th>Purchase Link</th>
      </thead>
      {batteries.map(b => <Battery data={b} />)}
    </batteries>
  </gui>
);

const Battery = ({data}) => (
  <battery>
    <type>{data.type}</type>
    <voltage>{data.voltage}</voltage>
    <amp-hours>{data['amp-hours']}</amp-hours>
    <watt-hours>{data['watt-hours']}</watt-hours>
    <price>${data.price}</price>
    <watt-hours-per-dollar>{data['wattHoursPerDollar'].toFixed(2)}</watt-hours-per-dollar>
    <link><a href={data.url}>Amazon</a></link>
  </battery>
);

render(
  INIT_GUI, {
  }, document.body
);
