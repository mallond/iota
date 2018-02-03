![iota369](https://user-images.githubusercontent.com/993459/35762946-de9bdea8-0866-11e8-8427-f0924b28b445.png)



# iota
IOTA Playground 
  No over engineering, just plain simple examples to understand 


# API Example Runs

- sendTransfer 
```
Important: This example needs a PoW server. Search for PoW server using the link below
[Servers with PoW](http://iota.dance/nodes/)
SEED: process.env.SEED
```

- findTransaction

## Simulate
- Digital Twin, Seed (DT), Address (TAG), Authenticate, get stream data

1. Machine requests seed and receives a transfer of one coin into seed account - this is the Digital Twin - or genesis transaction
2. Machine address(es) contains key int the iota.tag to services i.e. code lookup for application, roles etc
3. HMAC message (iota.tag) is the Machine address, where the machine and services have a shared secret-key

1a. Machines can have unlimited Digital Twins, or interested parties. Intrested parties must transfer coins for service access
2a. Machine address can be zeroed out of value, or kind of a shut off bit

> This is like a distributed directory service, authentication, roles and driver to machine data



### Links and things

- [iota.lib.js](https://github.com/iotaledger/iota.lib.js/)
- [Command line](https://github.com/iotaledger/cli-app)
- [Digital Twin](https://medium.com/@cstoecker/implementing-first-industry-4-0-use-cases-with-iota-dag-tangle-machine-tagging-for-digital-twins-baf1943c499d)
