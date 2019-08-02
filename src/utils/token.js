import {
  updateSavedTokenSymbols,
  selectToken,
  selectedListSymbol,
} from 'actions/token'
import store from '../store'

export const token = {
  updateSavedTokenSymbols: (tokenSymbols) => store.dispatch(updateSavedTokenSymbols(tokenSymbols)),
  selectToken: (tokenSymbol) => store.dispatch(selectToken(tokenSymbol)),
  getTokenSymbols: () => store.getState().token.savedTokenSymbols,
}

export default token

export const defaultTokenList = []
