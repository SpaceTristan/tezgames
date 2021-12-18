import React from "react";
import {  useConnect, useOnBlock, useAccountPkh, useTezos } from "../dapp/dapp";
import { NETWORK } from "../dapp/default";
import { Button } from "@mui/material";

export function Connect() {
    const connect = useConnect()
    const accountPkh = useAccountPkh()
    const tezos = useTezos()
    const [balance, setBalance] = React.useState(null)
    const handleConnect = React.useCallback(async () => {
      try {
        await connect(NETWORK, { forcePermission: true })
      } catch (err) {
        console.error(err.message)
      }
    }, [connect])
  
  
    const accountPkhPreview = React.useMemo(() => {
      if (!accountPkh) return undefined
      else {
        const accPkh = (accountPkh as unknown) as string
        const ln = accPkh.length
        return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`
      }
    }, [accountPkh])
  
    const loadBalance = React.useCallback(async () => {
      if (tezos) {
        const tezosOk = tezos as any
        const bal = await tezosOk.tz.getBalance(accountPkh)
        setBalance(tezosOk.format('mutez', 'tz', bal).toString())
      }
    }, [tezos, accountPkh, setBalance])
  
    React.useEffect(() => {
      loadBalance()
    }, [loadBalance])
  
    useOnBlock(tezos, loadBalance)
  
    return <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr', margin: '0 auto', width: "500px" }}>
        <div>{balance}</div>
        <div>{accountPkhPreview}</div>
        <Button onClick={handleConnect}>Connect account </Button>
      </div>
  }

