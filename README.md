#### menggunakan git action untuk automatic push jika ada perubahan di dalam code, simple nodejs, auto push image ke dockerhub, auto deploy ke kubernetes

![Alt text](https://raw.githubusercontent.com/teknik-github/tugas-git-action/refs/heads/main/picture/done.svg "arsitecture")


```
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.14.8/config/manifests/metallb-native.yaml
```

#### untuk menjalankan semua file yang ada di folder deployment jalankan perintah di bawah ini. configurasi kustomization.yaml jika perluh

```
kubectl apply -k .
```

### ganti host yang ada di nodejs-service ingress.yaml

```
- host: localhost.local #dengan domain yang anda punya
```
akses nodejs dengan domain misal localhost.local

### jika tidak mempunyai domain bisa menambahkan localdomain nya di

```
vim /etc/hosts atau nano /etc/hosts

##tambahkan tolong gunakan tab untuk memberi jarak!

127.0.0.1   localhost.local

##atau bisa juga menggunakan duckdns 

tambahkan subdomain ke duckdn lalu add domain untuk current ip bisa di beri ip public (jika inggin di akses public) atay bisa juga tambahkan ip private laptop kalian (misal 192.168.1.34)
```

### untuk menegakses dashboard traefik

```
localhost:8080

##jika localhost:8080 tidak bisa di buka gunakan di bawah ini (untuk semenetara)

kubectl port-forward pod/traefikpodname  8080:8080
```

ubah role jika di perluhkan
traefik role: peran yang ditetapkan oleh administrator klaster untuk mengizinkan Traefik menggunakan API Kubernetes

role binding: fitur di Kubernetes yang digunakan untuk mengikat ke Role, sedangkan ClusterRoleBinding digunakan untuk mengikat ke ClusterRole