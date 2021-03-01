import './src/styles/main.css'
import { globalHistory } from '@reach/router'

export const onInitialClientRender = () => {
    globalHistory._onTransitionComplete();
}

export {wrapRootElement} from './src/apollo/wrap-root-element'