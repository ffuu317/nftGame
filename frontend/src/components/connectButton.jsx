import { ConnectButton } from '@rainbow-me/rainbowkit';
export const MyConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
               // 移除 height: '60rem'
return (<div style={{
  position: 'absolute',
      top: '2.3rem',   
      right: '20rem', 
      backgroundColor: 'black',
      width:'3.4rem',
      height:'3rem',
}}>
  <button 
    onClick={openConnectModal} 
    type="button" 
    style={{
      left:'-0.3rem',
      top:'-0.3rem',
      position: 'absolute', 
      backgroundColor: '#F66FCF',
      border: 'none', 
      cursor: 'pointer', 
      padding: '0',    
    }}
  >
    <img src='/checkin.png' width='52rem' height='' style={{ display: 'block' }} />
  </button>
  
</div>

                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 , position:'absolute', top:'2.5rem' , left:'70rem', transform:'scale(1.2)'}}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};