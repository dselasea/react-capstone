import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.coinstats.app/public/v1/coins/';

export const fetchData = createAsyncThunk('fetchCryptoData/getCryptoData', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const cryptoData = data.coins.map((coin) => (
    {
      id: coin.id,
      cryptoImage: coin.icon,
      cryptoSymbol: coin.symbol,
      cryptoName: coin.name,
      cryptoPrice: coin.price,
      cryptoRank: coin.rank,
      cryptoSupply: coin.totalSupply,
      cryptoChangeHour: coin.priceChange1h,
      cryptoChangeDay: coin.priceChange1d,
      cryptoChangeWeek: coin.priceChange1w,
      cryptoUrl: coin.websiteUrl,
      show: false,
    }
  ));
  return cryptoData;
});

const initialState = {
  loading: true,
  data: [],
  error: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    filterCrypto: (state, action) => {
      const id = action.payload;
      const cryptoData = state;
      cryptoData.crypto = state.data.map((coin) => {
        const coins = coin;
        if (coin.id === id) {
          coins.show = true;
        } else {
          coins.show = false;
        }
        return coin;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
export const { filterCrypto } = dataSlice.actions;
