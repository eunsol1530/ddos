const tlsOptions = {
   ALPNProtocols: ['h2', 'http/1.1'],
   echdCurve: "GREASE:X25519:x25519",
   ciphers: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
   rejectUnauthorized: true,
   socket: connection,
   honorCipherOrder: true,
   secure: true,
   port: 443,
   uri: parsedTarget.host,
   servername: parsedTarget.host,
   secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method",],
   secureOptions: crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION |
                  crypto.constants.SSL_OP_NO_TICKET |
                  crypto.constants.SSL_OP_NO_COMPRESSION |
                  crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
                  crypto.constants.SSL_OP_NO_SSLv2 |
                  crypto.constants.SSL_OP_NO_SSLv3 |
                  crypto.constants.SSL_OP_NO_TLSv1 |
                  crypto.constants.SSL_OP_NO_TLSv1_1,
 };