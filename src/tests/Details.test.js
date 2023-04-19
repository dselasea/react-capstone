import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/Details';

describe('Home', () => {
  it('renders correctly', () => {
    const detailsComponent = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(detailsComponent).toMatchSnapshot();
  });
});
