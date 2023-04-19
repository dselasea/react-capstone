import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Home', () => {
  it('renders correctly', () => {
    const headerComponent = renderer
      .create(<Header />)
      .toJSON();
    expect(headerComponent).toMatchSnapshot();
  });
});
