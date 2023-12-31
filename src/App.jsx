// import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Header from './header/Header';
import Home from './pages/Home';
import Footer from './footer/footer';
import './App.css';

function App(props) {
// bronze 
// silver
// gold
// platinum
// saphire
// emerald
// ruby
// diamond 
  let bronze = 1
  const [bronzeCurrency, setBronzeCurrency] = useState(bronze);
  let silver = 1
  const [silverCurrency, setSilverCurrency] = useState(silver);
  let gold = 1
  const [goldCurrency, setGoldCurrency] = useState(gold);
  let platinum = 1
  const [platinumCurrency, setPlatinumCurrency] = useState(platinum);
  let saphire = 1
  const [saphireCurrency, setSaphireCurrency] = useState(saphire);
  let emerald = 1
  const [emeraldCurrency, setEmeraldCurrency] = useState(emerald);
  let ruby = 1
  const [rubyCurrency, setRubyCurrency] = useState(ruby);
  let diamond = 1
  const [diamondCurrency, setDiamondCurrency] = useState(diamond);
  return (
    <div>
      <Header bronze = {bronzeCurrency} silver = {silverCurrency} gold = {goldCurrency} platinum = {platinumCurrency} saphire = {saphireCurrency} emerald = {emeraldCurrency} ruby = {rubyCurrency} diamond = {diamondCurrency}/>
      <Home bronze = {bronzeCurrency} silver = {silverCurrency} gold = {goldCurrency} platinum = {platinumCurrency} saphire = {saphireCurrency} emerald = {emeraldCurrency} ruby = {rubyCurrency} diamond = {diamondCurrency}/>
      <Footer />
    </div>
  )
};

export default App;