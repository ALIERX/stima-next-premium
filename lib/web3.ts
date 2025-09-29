'use client'
import { ethers } from 'ethers'

export function getBrowserProvider(){
  if (typeof window === 'undefined' || !(window as any).ethereum) return null
  return new ethers.BrowserProvider((window as any).ethereum)
}

const RPC = process.env.NEXT_PUBLIC_RPC_URL
const ERC20 = process.env.NEXT_PUBLIC_ERC20_ADDRESS
const ABI_JSON = process.env.NEXT_PUBLIC_ERC20_ABI

const DEFAULT_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function mint(address to, uint256 amount)"
]

export function getReadProvider(){
  if (!RPC) return null
  return new ethers.JsonRpcProvider(RPC)
}

export function getContract(providerOrSigner:any){
  if (!ERC20) throw new Error('Missing NEXT_PUBLIC_ERC20_ADDRESS')
  const abi = ABI_JSON ? JSON.parse(ABI_JSON) : DEFAULT_ABI
  return new ethers.Contract(ERC20, abi, providerOrSigner)
}
