import { Suspense, useState } from 'react';
import {
    BrowserRouter,
    Route,
    Routes as Switch,
    Navigate
} from 'react-router-dom';
import styled from 'styled-components';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { RootState } from '../store/reducers';
import ContactScreen from '../screens/ContactsScreen/ContactScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen/ServicesScreen';

const Fallback = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
`;

const Flexbox = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`;

const Routes = () => {
    const [isOpened, setIsOpened] = useState(
        useSelector((state: RootState) => state.layout.blackboxIsOpened)
    );

    return (
        <Suspense fallback={<Fallback />}>
            <BrowserRouter>
                <Flexbox>
                    {isOpened && <Header />}
                    <Switch>
                        <Route
                            path="/"
                            element={<HomeScreen showHeader={setIsOpened} />}
                        />
                        <Route path="/services" element={<ServicesScreen />} />
                        <Route path="/about" element={<AboutScreen />} />
                        <Route path="/contacts" element={<ContactScreen />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Switch>
                </Flexbox>
            </BrowserRouter>
        </Suspense>
    );
};

export default Routes;
