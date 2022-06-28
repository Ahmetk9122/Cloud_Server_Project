import { combineReducers } from 'redux';
import product from './slice/product';
import feature from './slice/feature';
import productWind from './slice/productWind';
import featureWind from './slice/featureWind';
import softtech from './slice/softtech';
const rootReducer = combineReducers({
  product: product,
  feature: feature,
  productWind:productWind,
  featureWind:featureWind,
  softtech:softtech,
});


export default rootReducer;
