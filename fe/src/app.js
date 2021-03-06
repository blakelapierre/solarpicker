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
const invertersUrl = `${window.location.href}inverters`;
const panelsUrl = `${window.location.href}panels`;

const {
  INIT,
  SORT_BATTERIES,
  SORT_INVERTERS,
  SORT_PANELS,
  SELECT_COMPONENT_TYPE
} = {
  INIT: (_, mutation) => {
    _.inited = true;
    _.mutation = mutation;

    _.batteries = [];
    _.inverters = [];
    _.panels = [];

    _.batteriesSortDir = 1;

    _.selectedComponentType = 'Batteries';

    _.sortDir = {
      'batteries': 1,
      'inverters': 1,
      'panels': 1
    };

    Papa.parse(batteriesUrl, {
      download: true,
      worker: true,
      header: true,
      dynamicTyping: true,
      step: (results) => {
        console.log(results);
      	if (results.data && results.data.voltage) {
      	  results.data['watt-hours'] = results.data.voltage * results.data['amp-hours'];
      	  results.data['wattHoursPerDollar'] =  results.data['watt-hours'] / results.data.price;
          results.data['dollarsPerKiloWattHour'] = results.data.price / results.data['watt-hours'] * 1000;
      	  mutation(_ => (_.batteries.push(results.data), _))();
      	}
      },
      complete: mutation(SORT_BATTERIES, 'wattHoursPerDollar', -1)
    });

    Papa.parse(invertersUrl, {
      download: true,
      worker: true,
      header: true, 
      dynamicTyping: true,
      step: (results) => {
        console.log(results);
	if (results.data && results.data['wattage']) {
          results.data['wattsPerDollar'] = results.data['wattage'] / results.data.price;
          mutation(_ => (_.inverters.push(results.data), _))();
	}
      },
      complete: mutation(SORT_INVERTERS, 'wattsPerDollar', -1)
    });

    Papa.parse(panelsUrl, {
      download: true,
      worker: true,
      header: true, 
      dynamicTyping: true,
      step: (results) => {
        console.log(results);
	if (results.data && results.data['wattage']) {
          results.data['wattsPerDollar'] = results.data['wattage'] / results.data.price;
          mutation(_ => (_.panels.push(results.data), _))();
	}
      },
      complete: mutation(SORT_PANELS, 'wattsPerDollar', -1)
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
  },

  SORT_INVERTERS: (_, attribute, dir = 1) => {
    _.sortDir.inverters = dir;
    _.inverters = _.inverters.sort((a, b) => {
      if (a[attribute] < b[attribute]) return -dir;
      if (b[attribute] < a[attribute]) return dir;
      return 0;
    });
    return _;
  },

  SORT_PANELS: (_, attribute, dir = 1) => {
    _.sortDir.panels = dir;
    _.panels = _.panels.sort((a, b) => {
      if (a[attribute] < b[attribute]) return -dir;
      if (b[attribute] < a[attribute]) return dir;
      return 0;
    });
    return _;
  },

  SELECT_COMPONENT_TYPE: (_, type) => {
    _.selectedComponentType = type;
    return _;
  }
};

const INIT_GUI = ({}, {inited, mutation}) => inited ? <GUI /> : mutation(INIT)(mutation);

const GUI = ({}, {selectedComponentType, mutation}) => (
  <gui>
    <warning>WARNING: Prices and/or specs may be wrong. Products may not be suitable.</warning>
    <component-types>
      <type className={selectedComponentType === 'Batteries' ? 'selected' : undefined} onClick={mutation(SELECT_COMPONENT_TYPE, 'Batteries')}>Batteries</type>
      <type className={selectedComponentType === 'Inverters' ? 'selected' : undefined} onClick={mutation(SELECT_COMPONENT_TYPE, 'Inverters')}>Inverters</type>
      <type className={selectedComponentType === 'Panels' ? 'selected' : undefined} onClick={mutation(SELECT_COMPONENT_TYPE, 'Panels')}>Panels</type>
    </component-types>
    {selectedComponentType === 'Batteries' ? <Batteries /> : undefined}
    {selectedComponentType === 'Inverters' ? <Inverters /> : undefined}
    {selectedComponentType === 'Panels' ? <Panels /> : undefined}
    <includes>This page includes <a href="https://github.com/developit/preact-cycle">preact-cycle</a> and <a href="https://www.papaparse.com/">papaparse</a></includes>
  </gui>
);

const Batteries = ({}, {batteries, batteriesSortDir, mutation}) => (
  <batteries>
    <thead>
      <th onClick={mutation(SORT_BATTERIES, 'type', -batteriesSortDir)}>Type</th>
      <th onClick={mutation(SORT_BATTERIES, 'voltage', -batteriesSortDir)}>Voltage</th>
      <th onClick={mutation(SORT_BATTERIES, 'amp-hours', -batteriesSortDir)}>Amp-Hours</th>
      <th onClick={mutation(SORT_BATTERIES, 'watt-hours', -batteriesSortDir)}>Watt-Hours</th>
      <th onClick={mutation(SORT_BATTERIES, 'price', -batteriesSortDir)}>Price</th>
      <th onClick={mutation(SORT_BATTERIES, 'wattHoursPerDollar', -batteriesSortDir)}>Watt-Hours / $</th>
      <th onClick={mutation(SORT_BATTERIES, 'dollarsPerKiloWattHour', -batteriesSortDir)}>$ / kWh</th>
      <th>Purchase Link</th>
    </thead>
    {batteries.map(b => <Battery data={b} />)}
  </batteries>
);

const Battery = ({data}) => (
  <battery>
    <type>{data.type}</type>
    <voltage>{data.voltage}</voltage>
    <amp-hours>{data['amp-hours']}</amp-hours>
    <watt-hours>{data['watt-hours']}</watt-hours>
    <price>${(data.price || 0).toFixed(2)}</price>
    <watt-hours-per-dollar>{data['wattHoursPerDollar'].toFixed(2)}</watt-hours-per-dollar>
    <dollars-per-kilo-watt-hour>{data['dollarsPerKiloWattHour'].toFixed(2)}</dollars-per-kilo-watt-hour>
    <link><a href={data.url} target="_blank">Amazon</a></link>
  </battery>
);

const Inverters = ({}, {inverters, sortDir, mutation}) => (
  <inverters>
    <thead>
      <th onClick={mutation(SORT_INVERTERS, 'voltage (in)', -sortDir.inverters)}>Voltage (in)</th>
      <th onClick={mutation(SORT_INVERTERS, 'wattage', -sortDir.inverters)}>Wattage</th>
      <th onClick={mutation(SORT_INVERTERS, 'voltage (out)', -sortDir.inverters)}>Voltage (out)</th>
      <th onClick={mutation(SORT_INVERTERS, 'frequency', -sortDir.inverters)}>Frequency</th>
      <th onClick={mutation(SORT_INVERTERS, 'efficiency', -sortDir.inverters)}>Efficiency</th>
      <th onClick={mutation(SORT_INVERTERS, 'price', -sortDir.inverters)}>Price</th>
      <th onClick={mutation(SORT_INVERTERS, 'wattsPerDollar', -sortDir.inverters)}>Watts / $</th>
      <th>Purchase Link</th>
    </thead>
    {inverters.map(i => <Inverter data={i} />)}
  </inverters>
);

const Inverter = ({data}) => (
  <inverter>
    <voltage-in>{data['voltage (in)']}</voltage-in>
    <wattage>{data['wattage']}</wattage>
    <voltage-out>{data['voltage (out)']}</voltage-out>
    <frequency>{data['frequency']}</frequency>
    <efficiency>{data['efficiency']}</efficiency>
    <price>${(data['price'] || 0).toFixed(2)}</price>
    <watts-per-dollar>{(data['wattsPerDollar'] || 0).toFixed(2)}</watts-per-dollar>
    <link><a href={data['url']} target="_blank">Amazon</a></link>
  </inverter>
);

const Panels = ({}, {panels, sortDir, mutation}) => (
  <panels>
    <thead>
      <th onClick={mutation(SORT_PANELS, 'voltage', -sortDir.panels)}>Voltage</th>
      <th onClick={mutation(SORT_PANELS, 'wattage', -sortDir.panels)}>Wattage</th>
      <th onClick={mutation(SORT_PANELS, 'weight', -sortDir.panels)}>Weight</th>
      <th onClick={mutation(SORT_PANELS, 'price', -sortDir.panels)}>Price</th>
      <th onClick={mutation(SORT_PANELS, 'wattsPerDollar', -sortDir.panels)}>Watts / $</th>
      <th>Purchase Link</th>
    </thead>
    {panels.map(p => <Panel data={p} />)}
  </panels>
);

const Panel = ({data}, {}) => (
  <panel>
    <voltage>{data.voltage}</voltage>
    <wattage>{data.wattage}</wattage>
    <weight>{data.weight}</weight>
    <price>${(data.price || 0).toFixed(2)}</price>
    <watts-per-dollar>{data.wattsPerDollar.toFixed(2)}</watts-per-dollar>
    <link><a href={data['url']} target="_blank">Amazon</a></link>
  </panel>
);

render(
  INIT_GUI, {
  }, document.body
);
