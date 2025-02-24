// configs for the supported pieces of software
// hasVersions, supportsConfigs, supportsHsts, supportsOcspStapling, and usesOpenssl only need to be defined if false
const noSupportedVersion = '10000.10000.10000';


module.exports = {
  apache: {
    highlighter: 'apache',
    latestVersion: '2.4.39',
    name: 'Apache',
    tls13: '2.4.36',
  },
  // supported ciphers generated with:
  // aws elb describe-load-balancer-policies --query "PolicyDescriptions[?PolicyName=='ELBSample-ELBDefaultCipherPolicy'].PolicyAttributeDescriptions[*].AttributeName[]"
  awselb: {
    hasVersions: false,
    highlighter: 'json',
    latestVersion: '2015.3',
    name: 'AWS Elastic Load Balancer',
    supportedCiphers: ['ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-AES128-SHA256', 'ECDHE-RSA-AES128-SHA256', 'ECDHE-ECDSA-AES128-SHA', 'ECDHE-RSA-AES128-SHA', 'DHE-RSA-AES128-SHA', 'ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-GCM-SHA384', 'ECDHE-ECDSA-AES256-SHA384', 'ECDHE-RSA-AES256-SHA384', 'ECDHE-RSA-AES256-SHA', 'ECDHE-ECDSA-AES256-SHA', 'AES128-GCM-SHA256', 'AES128-SHA256', 'AES128-SHA', 'AES256-GCM-SHA384', 'AES256-SHA256', 'AES256-SHA', 'DHE-DSS-AES128-SHA', 'CAMELLIA128-SHA', 'EDH-RSA-DES-CBC3-SHA', 'DES-CBC3-SHA', 'ECDHE-RSA-RC4-SHA', 'RC4-SHA', 'ECDHE-ECDSA-RC4-SHA', 'DHE-DSS-AES256-GCM-SHA384', 'DHE-RSA-AES256-GCM-SHA384', 'DHE-RSA-AES256-SHA256', 'DHE-DSS-AES256-SHA256', 'DHE-RSA-AES256-SHA', 'DHE-DSS-AES256-SHA', 'DHE-RSA-CAMELLIA256-SHA', 'DHE-DSS-CAMELLIA256-SHA', 'CAMELLIA256-SHA', 'EDH-DSS-DES-CBC3-SHA', 'DHE-DSS-AES128-GCM-SHA256', 'DHE-RSA-AES128-GCM-SHA256', 'DHE-RSA-AES128-SHA256', 'DHE-DSS-AES128-SHA256', 'DHE-RSA-CAMELLIA128-SHA', 'DHE-DSS-CAMELLIA128-SHA', 'ADH-AES128-GCM-SHA256', 'ADH-AES128-SHA', 'ADH-AES128-SHA256', 'ADH-AES256-GCM-SHA384', 'ADH-AES256-SHA', 'ADH-AES256-SHA256', 'ADH-CAMELLIA128-SHA', 'ADH-CAMELLIA256-SHA', 'ADH-DES-CBC3-SHA', 'ADH-DES-CBC-SHA', 'ADH-RC4-MD5', 'ADH-SEED-SHA', 'DES-CBC-SHA', 'DHE-DSS-SEED-SHA', 'DHE-RSA-SEED-SHA', 'EDH-DSS-DES-CBC-SHA', 'EDH-RSA-DES-CBC-SHA', 'IDEA-CBC-SHA', 'RC4-MD5', 'SEED-SHA', 'DES-CBC3-MD5', 'DES-CBC-MD5', 'RC2-CBC-MD5', 'PSK-AES256-CBC-SHA', 'PSK-3DES-EDE-CBC-SHA', 'KRB5-DES-CBC3-SHA', 'KRB5-DES-CBC3-MD5', 'PSK-AES128-CBC-SHA', 'PSK-RC4-SHA', 'KRB5-RC4-SHA', 'KRB5-RC4-MD5', 'KRB5-DES-CBC-SHA', 'KRB5-DES-CBC-MD5', 'EXP-EDH-RSA-DES-CBC-SHA', 'EXP-EDH-DSS-DES-CBC-SHA', 'EXP-ADH-DES-CBC-SHA', 'EXP-DES-CBC-SHA', 'EXP-RC2-CBC-MD5', 'EXP-KRB5-RC2-CBC-SHA', 'EXP-KRB5-DES-CBC-SHA', 'EXP-KRB5-RC2-CBC-MD5', 'EXP-KRB5-DES-CBC-MD5', 'EXP-ADH-RC4-MD5', 'EXP-RC4-MD5', 'EXP-KRB5-RC4-SHA', 'EXP-KRB5-RC4-MD5'],
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: noSupportedVersion,
    usesOpenssl: false,
  },
  caddy: {
    highlighter: 'nginx', // TODO: find better
    latestVersion: '1.0.0',
    name: 'Caddy',
    supportedCiphers: ['ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-GCM-SHA384', 'ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-WITH-CHACHA20-POLY1305', 'ECDHE-RSA-WITH-CHACHA20-POLY1305', 'ECDHE-RSA-AES256-CBC-SHA', 'ECDHE-RSA-AES128-CBC-SHA', 'ECDHE-ECDSA-AES256-CBC-SHA', 'ECDHE-ECDSA-AES128-CBC-SHA', 'RSA-AES256-CBC-SHA', 'RSA-AES128-CBC-SHA', 'ECDHE-RSA-3DES-EDE-CBC-SHA', 'RSA-3DES-EDE-CBC-SHA'],
    supportsOcspStapling: false, // actually true; can't be disabled in Caddy
    tls13: '0.11.5',
    usesOpenssl: false,
  },
  haproxy: {
    highlighter: 'nginx',  // TODO: find better
    latestVersion: '1.9.8',
    name: 'HAProxy',
    tls13: '1.9.1',
  },
  lighttpd: {
    highlighter: 'nginx',
    latestVersion: '1.4.54',
    name: 'lighttpd',
    tls13: '1.4.53'
  },
  mysql: {
    highlighter: 'ini',
    latestVersion: '8.0.16',
    name: 'MySQL',
    supportsHsts: false,
    supportsOcsp: false,
    tls13: '8.0.16',
  },
  nginx: {
    checked: true,
    highlighter: 'nginx',
    latestVersion: '1.17.0',
    name: 'nginx',
    tls13: '1.13.0',
  },
  openssl: {
    latestVersion: '1.1.1c',
    tls13: '1.1.1',
  },
  oraclehttp: {
    highlighter: 'apache',
    latestVersion: '12.2.1',
    name: 'Oracle HTTP Server',
    supportsHsts: true,
    supportsOcspStapling: false,  // TODO: fix this, but Oracle's documentation is terrible
    tls13: noSupportedVersion,
  },
  postfix: {
    highlighter: 'nginx',
    latestVersion: '3.4.5',
    name: 'Postfix',
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '3.3.2',
  },
  postgresql: {
    highlighter: 'nginx',
    latestVersion: '11.3',
    name: 'PostgreSQL',
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '12.0',
  },
};
