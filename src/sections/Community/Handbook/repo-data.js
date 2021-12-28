import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import five from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import gnh from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import smp from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import imagehub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import patterns from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";

import istioLogo from "../../../assets/images/service-mesh-icons/istio.svg";
import linkerdLogo from "../../../assets/images/service-mesh-icons/linkerd.svg";
import consulLogo from "../../../assets/images/service-mesh-icons/consul.svg";
import kumaLogo from "../../../assets/images/service-mesh-icons/kuma.svg";
import nsmLogo from "../../../assets/images/service-mesh-icons/nsm.svg";
import nginxLogo from "../../../assets/images/service-mesh-icons/nginx-service-mesh.svg";
import traefikLogo from "../../../assets/images/service-mesh-icons/traefik.svg";
import smiLogo from "../../../assets/images/service-mesh-icons/service-mesh-interface/icon/color/servicemeshinterface-icon-color.svg";
import osmLogo from "../../../assets/images/service-mesh-icons/open-service-mesh/icon/color/openservicemesh-icon-color.svg";
import appmeshLogo from "../../../assets/images/service-mesh-icons/aws-app-mesh.svg";
import ciliumLogo from "../../../assets/images/service-mesh-icons/cilium.svg";

export const repo_data = [
  {
    category: "Frontend",
    subdata: [
      {
        project: "Layer5",
        image: five,
        site: "https://layer5.io/",
        language: "Gatsby",
        repository: "https://github.com/layer5io/layer5",
      },
      {
        project: "Meshery.io",
        image: meshery,
        site: "https://meshery.io",
        language: "Jekyll",
        repository: "https://github.com/meshery/meshery",
      },
      {
        project: "Meshery Documentation",
        image: meshery,
        site: "http://docs.meshery.io",
        language: "Jekyll",
        repository: "https://github.com/meshery/meshery/tree/master/docs",
      },
      {
        project: "Meshery UI",
        image: meshery,
        site: "https://github.com/layer5io/meshery/tree/master/ui",
        language: "NextJS, MaterialUI and Billboard.js",
        repository: "https://github.com/layer5io/meshery/tree/master/ui",
      },
      {
        project: "Service Mesh Performance",
        image: smp,
        site: "https://smp-spec.io",
        language: "Jekyll",
        repository:
          "https://github.com/service-mesh-performance/service-mesh-performance",
      },
      {
        project: "Nighthawk",
        image: gnh,
        site: "https://getnighthawk.dev",
        language: "Jekyll",
        repository: "https://github.com/layer5io/nighthawk",
      },
      {
        project: "MeshMap",
        image: meshery,
        site:
          "/service-mesh-management/meshmap",
        language: "Cytoscape.js",
        description: "A visual topology to display service mesh configuration, workloads and traffic.",
        repository: "https://github.com/meshery/meshery",
      },
      {
        project: "Service Mesh Discussion",
        image: five,
        site: "https://discuss.layer5.io/",
        language: "Discourse",
        repository: " https://staging-discuss.layer5.io/",
      },
    ],
  },

  {
    category: "Service Mesh Management Repos",
    subdata: [
      {
        project: "Meshery",
        image: meshery,
        language: "Golang, gRPC",
        description: "The service mesh management plane to provide governance and backend system integration. Golang, gRPC, NATS, CloudEvents",
        repository: "https://github.com/layer5io/meshery",
      },
      {
        project: "SMI Conformance",
        image: smiLogo,
        language: "GitHub Action",
        repository:
          "https://github.com/layer5io/meshery-smi-conformance-action",
      },
      {
        project: "Meshery Operator",
        image: MesheryOperator,
        language: "Golang, Kubernetes Operator",
        description: "Meshery Operator is the multi-service mesh operator and implementation of MeshSync.",
        repository: "https://github.com/layer5io/meshery-operator",
      },
      {
        project: "MeshSync",
        image: MeshSync,
        language: "Golang and NATS",
        description: "MeshSync is a multi-mesh resource discovery application which is also a custom kubernetes controller.",
        repository: "https://github.com/layer5io/meshsync",
      },
      {
        project: "Learn-Layer5",
        image: five,
        language: "Golang, Kuttl",
        description: "A utility for validating the conformance of service mesh implementations and their adherence to the Service Mesh Interface specifications.",
        repository: "https://github.com/layer5io/smi-conformance",
      },
      {
        project: "MeshMonkey",
        language: "Golang",
        repository: "https://github.com/layer5io/meshmonkey",
      },
    ],
  },

  {
    category: "Adapter Dedicated Repos",
    subdata: [
      {
        project: "Meshery Adapter for Istio",
        image: istioLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-istio",
      },
      {
        project: "Meshery Adapter for Linkerd",
        image: linkerdLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-linkerd",
      },
      {
        project: "Meshery Adapter for NSM",
        image: nsmLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-nsm",
      },
      {
        project: "Meshery Adapter for Octarine",
        image: meshery,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-octarine",
      },
      {
        project: "Meshery Adapter for Traefik Mesh",
        image: traefikLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-traefik-mesh",
      },
      {
        project: "Meshery Adapter for Kuma",
        image: kumaLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-kuma",
      },
      {
        project: "Meshery Adapter for Consul",
        image: consulLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-consul",
      },
      {
        project: "Meshery Adapter for CPX",
        image: meshery,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-cpx",
      },
      {
        project: "Meshery Adapter for App Mesh ",
        image: appmeshLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-app-mesh",
      },
      {
        project: "Meshery Adapter for Tanzu Service Mesh",
        image: meshery,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-tanzu-sm",
      },
      {
        project: "Meshery Adapter for NGINX Service Mesh",
        image: nginxLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-nginx-sm",
      },
      {
        project: "Meshery Adapter for Cilium Service Mesh",
        image: ciliumLogo,
        language: "Golang, gRPC",
        repository: "https://github.com/meshery/meshery-cilium",
      },
      {
        project: "MeshKit",
        image: meshery,
        language: "Golang",
        descriptionp: "Toolkit for Layer5's microservices",
        repository: "https://github.com/layer5io/meshkit",
      },
      {
        project: "Meshery Adapter Library",
        image: meshery,
        language: "Golang, gRPC",
        description: "The Meshery Adapter Library provides a common and consistent set of functionality that Meshery adapters use for managing the lifecycle, configuration, operation, and performance of service meshes and their workloads.",
        repository: "https://github.com/layer5io/meshery-adapter-library",
      },
      {
        project: "Meshery Adapter Template",
        image: meshery,
        language: "Golang, gRPC",
        repository: "https://github.com/layer5io/meshery-adapter-template",
      },
    ],
  },

  {
    category: "Installation Dedicated Repos",
    subdata: [
      {
        project: "Scoop Bucket",
        language: "Windows-compatible package management for `mesheryctl`",
        repository: "https://github.com/layer5io/scoop-bucket",
      },
      {
        project: "Homebrew Tap",
        language: "Ruby",
        description: "MacOS-compatible package management for `mesheryctl`",
        repository: "https://github.com/layer5io/homebrew-tap",
      },
    ],
  },

  {
    category: "WebAssembly Repos",
    subdata: [
      {
        project: "Image Hub",
        image: imagehub,
        language: "Vuejs",
        description: "A sample application written to run on Istio or Consul for exploring WebAssembly modules used as Envoy filters.",
        repository: "https://github.com/layer5io/image-hub",
      },
      {
        project: "WASM Filters",
        language: "C, C++, Rust",
        description: "A collection of WebAssemby filters for Envoy proxy written in C, C++, and Rust for exercising different features provided by envoy-wasm.",
        repository: "https://github.com/layer5io/wasm-filters",
      },
    ],
  },

  {
    category: "Service Mesh Performance Repos ",
    subdata: [
      {
        project: "Service Mesh Performance",
        image: smp,
        language: "Protobuf",
        description:
          "a common format for capturing and describing service meshes’ performance and workloads.",
        repository:
          "https://github.com/layer5io/service-mesh-performance-specification",
      },
      {
        project: "Wrk2",
        language: "C",
        description:
          "a C-based load generator. A fork of wrk2, which includes the concept of coordinated omission.",
        repository: "https://github.com/giltene/wrk2",
      },
      {
        project: "Gowrk2",
        image: meshery,
        language: "Golang",
        description:
          "Augmentation of wrk2 to produce output compatible with Meshery’s visualization of performance test results.",
        repository: "https://github.com/layer5io/gowrk2",
      },
      {
        project: "Nighthawk",
        image: gnh,
        language: "Golang, gRPC",
        description:
          "Augmentation of Envoy Nighthawk to produce output compatible with Meshery’s visualization of performance test results",
        repository: "https://github.com/layer5io/nighthawk-go",
      },
    ],
  },

  {
    category: "Service Mesh Pattern Repos",
    subdata: [
      {
        project: "Service Mesh Patterns",
        image: patterns,
        language: "Yaml",
        description:
          "A collection of functional examples to be used as patterns for operationalizing cloud native infrastruture and application deployments and applying best practices.",
        repository:
          "https://github.com/service-mesh-patterns/service-mesh-patterns",
      },
    ],
  },

  {
    category: "Service Mesh Training",
    subdata: [
      {
        project: "Istio Service Mesh Workshop",
        image: istioLogo,
        language: "Labs",
        description:
          "A workshop that teaches about service meshes through the lens of Istio.",
        repository:
          "https://github.com/layer5io/istio-service-mesh-workshop",
      },
    ],
  },
];
