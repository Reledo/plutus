import React, { useState } from 'react';

export default function App() {
  const [checkoutActive, setCheckoutActive] = useState(false);
  const [chosenPackage, setChosenPackage] = useState<'mobile' | 'pc'>('mobile');
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  const [showToast, setShowToast] = useState(false);

  const checkout = (which: 'mobile' | 'pc') => {
    setChosenPackage(which);
    setCheckoutActive(true);
    window.scrollTo(0, 0);
  };

  const showHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCheckoutActive(false);
    window.scrollTo(0, 0);
  };

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const x = document.createElement('textarea');
      x.value = text;
      document.body.appendChild(x);
      x.select();
      document.execCommand('copy');
      x.remove();
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const faqs = [
    {
      q: 'Does Plutus guarantee profits?',
      a: 'No. Trading involves risk and losses are possible. Plutus does not guarantee profits or a specific trading result.',
    },
    {
      q: 'Can I test it first?',
      a: 'Contact the Plutus team to confirm any available demonstration or testing options before purchasing.',
    },
    {
      q: 'What do I need?',
      a: 'You need a supported MetaTrader environment and a compatible device. A VPS may be useful for some workflows.',
    },
    {
      q: 'How do I receive the software?',
      a: 'After payment confirmation, follow the delivery and installation instructions provided by the Plutus team.',
    },
  ];

  return (
    <>
      {!checkoutActive && (
        <div id="home">
          <header>
            <div className="brand">
              <span className="mark"></span> PLUTUS
            </div>
          </header>
          <main>
            <div className="hero">
              <div className="wrap">
                <div className="eyebrow">PLUTUS TRADING SOFTWARE</div>
                <h1>
                  Trade smarter.
                  <br />
                  <span className="blue">
                    Automate
                    <br />
                    better.
                  </span>
                </h1>
                <p className="lead">
                  Plutus is software built to help traders automate rule-based execution, manage
                  risk settings and trade with greater consistency through supported MetaTrader
                  environments.
                </p>
                <div className="actions">
                  <a className="btn primary" href="#pricing">
                    Get Plutus Now →
                  </a>
                  <a className="btn secondary" href="#features">
                    View Features
                  </a>
                </div>
              </div>
            </div>

            <section id="features" className="center">
              <div className="eyebrow">WHY PLUTUS</div>
              <h2 className="section-title">
                Built for disciplined
                <br />
                execution
              </h2>
              <p className="sub">
                A professional-looking interface focused on automation, configuration and
                transparent risk information rather than unrealistic promises.
              </p>
              <div className="wrap grid-features">
                <article className="feature">
                  <div className="ico">↻</div>
                  <h3>Automated Execution</h3>
                  <p>
                    Automate supported strategy rules and execution while keeping your selected
                    settings under your control.
                  </p>
                </article>
                <article className="feature">
                  <div className="ico">⌁</div>
                  <h3>Risk Management</h3>
                  <p>
                    Configure position sizing, stop-loss, take-profit and other risk parameters
                    before deployment.
                  </p>
                </article>
                <article className="feature">
                  <div className="ico">MT</div>
                  <h3>MT4 &amp; MT5</h3>
                  <p>
                    Designed for supported MetaTrader 4 and MetaTrader 5 environments, including
                    VPS workflows.
                  </p>
                </article>
              </div>
            </section>

            <section className="dark-sec">
              <div className="wrap">
                <div className="eyebrow">SIMPLE SETUP</div>
                <h2 className="section-title">
                  From purchase to
                  <br />
                  deployment.
                </h2>
                <p className="lead">
                  Keep the onboarding simple so a client knows exactly what happens after payment.
                </p>
                <div className="steps">
                  <div className="step">
                    <div className="num">1</div>
                    <div>
                      <h3>Purchase</h3>
                      <p>Choose your Plutus package and complete checkout.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="num">2</div>
                    <div>
                      <h3>Configure</h3>
                      <p>
                        Receive installation guidance and select your trading and risk parameters.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="num">3</div>
                    <div>
                      <h3>Monitor</h3>
                      <p>
                        Run the software and monitor your account through your broker environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="status">
                  <div className="status-head">
                    <span>LIVE CONFIGURATION</span>
                    <span className="ready">● READY</span>
                  </div>
                  <div className="status-grid">
                    <div className="status-cell">
                      Execution Mode<strong>Advanced</strong>
                    </div>
                    <div className="status-cell">
                      Stop Loss<strong>Configured</strong>
                    </div>
                    <div className="status-cell">
                      Take Profit<strong>Configured</strong>
                    </div>
                    <div className="status-cell">
                      Auto Trading<strong className="ready">ON</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="pricing" className="center">
              <div className="eyebrow">PRICING</div>
              <h2 className="section-title">
                Choose your
                <br />
                Plutus package
              </h2>
              <p className="sub">
                Select a package, then complete payment using one of the supported wallet
                addresses.
              </p>
              <div className="pricing">
                <article className="price-card">
                  <h3>Plutus Mobile</h3>
                  <div className="price">$2,000</div>
                  <ul>
                    <li>Mobile access</li>
                    <li>Setup guidance</li>
                    <li>Core monitoring tools</li>
                    <li>Customer support</li>
                  </ul>
                  <button className="btn primary" onClick={() => checkout('mobile')}>
                    BUY MOBILE — $2,000
                  </button>
                </article>
                <article className="price-card">
                  <span className="popular">POPULAR</span>
                  <h3>Plutus PC</h3>
                  <div className="price">$6,800</div>
                  <ul>
                    <li>MT4 / MT5 package</li>
                    <li>Full configuration guidance</li>
                    <li>Risk-management controls</li>
                    <li>Priority support</li>
                  </ul>
                  <button className="btn primary" onClick={() => checkout('pc')}>
                    BUY PLUTUS — $6,800
                  </button>
                </article>
              </div>
            </section>

            <section className="center">
              <div className="eyebrow">SUPPORT</div>
              <h2 className="section-title">
                Frequently asked
                <br />
                questions
              </h2>
              <div className="faq">
                {faqs.map((item, idx) => {
                  const isOpen = !!openFaqs[idx];
                  return (
                    <div key={idx} className={`faq-item${isOpen ? ' open' : ''}`}>
                      <button className="faq-q" onClick={() => toggleFaq(idx)}>
                        {item.q} <span>{isOpen ? '−' : '+'}</span>
                      </button>
                      <div className="faq-a">{item.a}</div>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
          <footer>
            <div className="brand">
              <span className="mark"></span> PLUTUS
            </div>
            <p>Trading software for structured execution and risk configuration.</p>
            <small>Trading involves risk. Past performance does not guarantee future results.</small>
          </footer>
        </div>
      )}

      {checkoutActive && (
        <div id="checkout" className="active">
          <div className="checkout-top">
            <div className="brand">
              <span className="mark"></span> PLUTUS
            </div>
          </div>
          <div className="checkout-body">
            <a href="#" className="back" onClick={showHome}>
              ← Back to Plutus
            </a>
            <div className="eyebrow">SECURE MANUAL CHECKOUT</div>
            <h1 style={{ color: '#0b1422', fontSize: '48px', margin: '12px 0' }}>
              Complete your payment
            </h1>
            <p className="note">
              Selected package:{' '}
              <strong id="chosen">
                {chosenPackage === 'mobile' ? 'Plutus Mobile' : 'Plutus PC'}
              </strong>{' '}
              · Amount due:{' '}
              <strong id="amount">{chosenPackage === 'mobile' ? '$2,000' : '$6,800'}</strong>
            </p>
            <p>
              Send the exact amount using one of the wallet networks below. Make sure the network
              you select matches the network used by your sending wallet.
            </p>
            <div className="paybox">
              <h3>USDT — TRC20</h3>
              <div className="network">TRON network</div>
              <div className="address" id="trc">
                TPH6CKFKyvBzEcX4jGdkDRagNgbEWcFZBV
              </div>
              <button
                className="copy"
                onClick={() => copyText('TPH6CKFKyvBzEcX4jGdkDRagNgbEWcFZBV')}
              >
                Copy TRC20 address
              </button>
            </div>
            <div className="paybox">
              <h3>USDT — BEP20</h3>
              <div className="network">BNB Smart Chain</div>
              <div className="address" id="bep">
                0x43Bd425CC330FdB7071F2d5BDe03442B3860A2Cc
              </div>
              <button
                className="copy"
                onClick={() => copyText('0x43Bd425CC330FdB7071F2d5BDe03442B3860A2Cc')}
              >
                Copy BEP20 address
              </button>
            </div>
            <div className="paybox">
              <h3>Bitcoin — BTC</h3>
              <div className="network">Bitcoin network</div>
              <div className="address" id="btc">
                bc1qx9k00dwjwn0c4pn8mw0pp6cwa7x0j4mltpcdlp
              </div>
              <button
                className="copy"
                onClick={() => copyText('bc1qx9k00dwjwn0c4pn8mw0pp6cwa7x0j4mltpcdlp')}
              >
                Copy BTC address
              </button>
            </div>
            <p className="note">
              <strong>Important:</strong> Verify the address and network carefully before sending.
              Cryptocurrency transfers are generally irreversible. This page displays payment
              details only; it does not automatically detect or confirm transactions. Keep your
              transaction ID / TXID for payment verification.
            </p>
          </div>
        </div>
      )}

      <div
        className="toast"
        id="toast"
        style={{ display: showToast ? 'block' : 'none' }}
      >
        Address copied
      </div>
    </>
  );
}
