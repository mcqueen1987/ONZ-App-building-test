module.exports = {
    "@context": [
        "http://api.conceptnet.io/ld/conceptnet5.7/context.ld.json"
    ],
    "@id": "/c/en/example",
    "edges": [
        {
            "@id": "/a/[/r/Synonym/,/c/ar/مثال/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ar/مثال/n/wn/cognition",
                "@type": "Node",
                "label": "مِثَال",
                "language": "ar",
                "sense_label": "n, cognition",
                "term": "/c/ar/مثال"
            },
            "surfaceText": "[[مِثَال]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/deterrent_example/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/deterrent_example/n/wn/communication",
                "@type": "Node",
                "label": "deterrent example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/deterrent_example"
            },
            "surfaceText": "[[deterrent example]] is a synonym of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/th/ตัวอย่าง/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/th/ตัวอย่าง/n/wn/cognition",
                "@type": "Node",
                "label": "ตัวอย่าง",
                "language": "th",
                "sense_label": "n, cognition",
                "term": "/c/th/ตัวอย่าง"
            },
            "surfaceText": "[[ตัวอย่าง]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplary/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                },
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplary/a",
                "@type": "Node",
                "label": "exemplary",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/exemplary"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/sample/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/sample/n/wn/cognition",
                "@type": "Node",
                "label": "sample",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/sample"
            },
            "surfaceText": "[[sample]] is a type of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/pt/exemplo/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/pt/exemplo/n/wn/cognition",
                "@type": "Node",
                "label": "exemplo",
                "language": "pt",
                "sense_label": "n, cognition",
                "term": "/c/pt/exemplo"
            },
            "surfaceText": "[[exemplo]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/illustration/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/illustration/n/wn/cognition",
                "@type": "Node",
                "label": "illustration",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/illustration"
            },
            "surfaceText": "[[illustration]] is a synonym of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/代表/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ja/代表/n/wn/cognition",
                "@type": "Node",
                "label": "代表",
                "language": "ja",
                "sense_label": "n, cognition",
                "term": "/c/ja/代表"
            },
            "surfaceText": "[[代表]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例解/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例解/n",
                "@type": "Node",
                "label": "例解",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例解"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/tapaus/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fi/tapaus/n/wn/cognition",
                "@type": "Node",
                "label": "tapaus",
                "language": "fi",
                "sense_label": "n, cognition",
                "term": "/c/fi/tapaus"
            },
            "surfaceText": "[[tapaus]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/wn/cognition/,/c/en/exemplar/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/exemplar/n/wn/cognition",
                "@type": "Node",
                "label": "exemplar",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/exemplar"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is a synonym of [[exemplar]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/instance/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/instance/n/wn/cognition",
                "@type": "Node",
                "label": "instance",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/instance"
            },
            "surfaceText": "[[instance]] is a synonym of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/pengajaran/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/pengajaran/n/wn/communication",
                "@type": "Node",
                "label": "pengajaran",
                "language": "ms",
                "sense_label": "n, communication",
                "term": "/c/ms/pengajaran"
            },
            "surfaceText": "[[pengajaran]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/引合い/n/jmdict/1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/引合い/n/jmdict/1",
                "@type": "Node",
                "label": "引合い",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/引合い"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/範/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/範/n",
                "@type": "Node",
                "label": "範",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/範"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/contoh/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/contoh/n/wn/cognition",
                "@type": "Node",
                "label": "contoh",
                "language": "id",
                "sense_label": "n, cognition",
                "term": "/c/id/contoh"
            },
            "surfaceText": "[[contoh]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/leçon/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fr/leçon/n/wn/communication",
                "@type": "Node",
                "label": "leçon",
                "language": "fr",
                "sense_label": "n, communication",
                "term": "/c/fr/leçon"
            },
            "surfaceText": "[[leçon]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ca/exemple/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ca/exemple/n/wn/cognition",
                "@type": "Node",
                "label": "exemple",
                "language": "ca",
                "sense_label": "n, cognition",
                "term": "/c/ca/exemple"
            },
            "surfaceText": "[[exemple]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/wn/event/,/c/en/case/n/wn/event/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/case/n/wn/event",
                "@type": "Node",
                "label": "case",
                "language": "en",
                "sense_label": "n, event",
                "term": "/c/en/case"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/event",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, event",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is a synonym of [[case]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/kejadian/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/kejadian/n/wn/cognition",
                "@type": "Node",
                "label": "kejadian",
                "language": "id",
                "sense_label": "n, cognition",
                "term": "/c/id/kejadian"
            },
            "surfaceText": "[[kejadian]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/no/eksempel/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/no/eksempel/n/wn/cognition",
                "@type": "Node",
                "label": "eksempel",
                "language": "no",
                "sense_label": "n, cognition",
                "term": "/c/no/eksempel"
            },
            "surfaceText": "[[eksempel]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/pengajaran/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/pengajaran/n/wn/communication",
                "@type": "Node",
                "label": "pengajaran",
                "language": "id",
                "sense_label": "n, communication",
                "term": "/c/id/pengajaran"
            },
            "surfaceText": "[[pengajaran]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sh/primjer/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sh/primjer/n",
                "@type": "Node",
                "label": "primjer",
                "language": "sh",
                "sense_label": "n",
                "term": "/c/sh/primjer"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/譬え/n/jmdict/1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/譬え/n/jmdict/1",
                "@type": "Node",
                "label": "譬え",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/譬え"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/エグザンプル/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/エグザンプル/n",
                "@type": "Node",
                "label": "エグザンプル",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/エグザンプル"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/it/esempio/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/it/esempio",
                "@type": "Node",
                "label": "esempio",
                "language": "it",
                "term": "/c/it/esempio"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                },
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fa/وهله/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fa/وهله/n/wn/cognition",
                "@type": "Node",
                "label": "وهله",
                "language": "fa",
                "sense_label": "n, cognition",
                "term": "/c/fa/وهله"
            },
            "surfaceText": "[[وهله]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/模様/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/模様",
                "@type": "Node",
                "label": "模様",
                "language": "ja",
                "term": "/c/ja/模様"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ca/escarment/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ca/escarment/n/wn/communication",
                "@type": "Node",
                "label": "escarment",
                "language": "ca",
                "sense_label": "n, communication",
                "term": "/c/ca/escarment"
            },
            "surfaceText": "[[escarment]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/代表/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/代表/a",
                "@type": "Node",
                "label": "代表",
                "language": "ja",
                "sense_label": "a",
                "term": "/c/ja/代表"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/模範/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/模範/n",
                "@type": "Node",
                "label": "模範",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/模範"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/喩え/n/jmdict/1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/喩え/n/jmdict/1",
                "@type": "Node",
                "label": "喩え",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/喩え"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/誡め/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ja/誡め/n/wn/communication",
                "@type": "Node",
                "label": "誡め",
                "language": "ja",
                "sense_label": "n, communication",
                "term": "/c/ja/誡め"
            },
            "surfaceText": "[[誡め]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sh/primer/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sh/primer",
                "@type": "Node",
                "label": "primer",
                "language": "sh",
                "term": "/c/sh/primer"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/peringatan/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/peringatan/n/wn/communication",
                "@type": "Node",
                "label": "peringatan",
                "language": "id",
                "sense_label": "n, communication",
                "term": "/c/id/peringatan"
            },
            "surfaceText": "[[peringatan]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/example/n/wn/cognition/,/c/en/information/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/information/n/wn/cognition",
                "@type": "Node",
                "label": "information",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/information"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is a type of [[information]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fa/مثل/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fa/مثل/n/wn/cognition",
                "@type": "Node",
                "label": "مثل",
                "language": "fa",
                "sense_label": "n, cognition",
                "term": "/c/fa/مثل"
            },
            "surfaceText": "[[مثل]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/quintessence/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/quintessence/n/wn/cognition",
                "@type": "Node",
                "label": "quintessence",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/quintessence"
            },
            "surfaceText": "[[quintessence]] is a type of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/misal/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/misal/n/wn/cognition",
                "@type": "Node",
                "label": "misal",
                "language": "id",
                "sense_label": "n, cognition",
                "term": "/c/id/misal"
            },
            "surfaceText": "[[misal]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例",
                "@type": "Node",
                "label": "例",
                "language": "ja",
                "term": "/c/ja/例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/様/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/様/n",
                "@type": "Node",
                "label": "様",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/様"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/引合/n/jmdict/1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/引合/n/jmdict/1",
                "@type": "Node",
                "label": "引合",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/引合"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/ajaran/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/ajaran/n/wn/communication",
                "@type": "Node",
                "label": "ajaran",
                "language": "id",
                "sense_label": "n, communication",
                "term": "/c/id/ajaran"
            },
            "surfaceText": "[[ajaran]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/手鑑/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/手鑑",
                "@type": "Node",
                "label": "手鑑",
                "language": "ja",
                "term": "/c/ja/手鑑"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例し/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例し/n",
                "@type": "Node",
                "label": "例し",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例し"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/規範/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/規範/n",
                "@type": "Node",
                "label": "規範",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/規範"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/it/lezione/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/it/lezione/n/wn/communication",
                "@type": "Node",
                "label": "lezione",
                "language": "it",
                "sense_label": "n, communication",
                "term": "/c/it/lezione"
            },
            "surfaceText": "[[lezione]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/wn/cognition/,/c/en/model/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/model/n/wn/cognition",
                "@type": "Node",
                "label": "model",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/model"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is a synonym of [[model]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/kejadian/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/kejadian/n/wn/cognition",
                "@type": "Node",
                "label": "kejadian",
                "language": "ms",
                "sense_label": "n, cognition",
                "term": "/c/ms/kejadian"
            },
            "surfaceText": "[[kejadian]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ca/lliçó/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ca/lliçó/n/wn/communication",
                "@type": "Node",
                "label": "lliçó",
                "language": "ca",
                "sense_label": "n, communication",
                "term": "/c/ca/lliçó"
            },
            "surfaceText": "[[lliçó]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/引以為鑒/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/zh/引以為鑒/n/wn/communication",
                "@type": "Node",
                "label": "引以為鑒",
                "language": "zh",
                "sense_label": "n, communication",
                "term": "/c/zh/引以為鑒"
            },
            "surfaceText": "[[引以為鑒]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/contoh/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/contoh/n/wn/communication",
                "@type": "Node",
                "label": "contoh",
                "language": "ms",
                "sense_label": "n, communication",
                "term": "/c/ms/contoh"
            },
            "surfaceText": "[[contoh]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/andai/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/andai/n/wn/cognition",
                "@type": "Node",
                "label": "andai",
                "language": "id",
                "sense_label": "n, cognition",
                "term": "/c/id/andai"
            },
            "surfaceText": "[[andai]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例/n",
                "@type": "Node",
                "label": "例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/eu/eskarmentu/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/eu/eskarmentu/n/wn/communication",
                "@type": "Node",
                "label": "eskarmentu",
                "language": "eu",
                "sense_label": "n, communication",
                "term": "/c/eu/eskarmentu"
            },
            "surfaceText": "[[eskarmentu]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/da/eksempel/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/da/eksempel/n/wn/cognition",
                "@type": "Node",
                "label": "eksempel",
                "language": "da",
                "sense_label": "n, cognition",
                "term": "/c/da/eksempel"
            },
            "surfaceText": "[[eksempel]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/例子/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/zh/例子/n/wn/cognition",
                "@type": "Node",
                "label": "例子",
                "language": "zh",
                "sense_label": "n, cognition",
                "term": "/c/zh/例子"
            },
            "surfaceText": "[[例子]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/model/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/model/n/wn/communication",
                "@type": "Node",
                "label": "model",
                "language": "id",
                "sense_label": "n, communication",
                "term": "/c/id/model"
            },
            "surfaceText": "[[model]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/havainto_opetus/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fi/havainto_opetus/n/wn/communication",
                "@type": "Node",
                "label": "havainto-opetus",
                "language": "fi",
                "sense_label": "n, communication",
                "term": "/c/fi/havainto_opetus"
            },
            "surfaceText": "[[havainto-opetus]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sh/primjer/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sh/primjer",
                "@type": "Node",
                "label": "primjer",
                "language": "sh",
                "term": "/c/sh/primjer"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/eu/adibide/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/eu/adibide/n/wn/communication",
                "@type": "Node",
                "label": "adibide",
                "language": "eu",
                "sense_label": "n, communication",
                "term": "/c/eu/adibide"
            },
            "surfaceText": "[[adibide]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/exemple/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fr/exemple/n/wn/communication",
                "@type": "Node",
                "label": "exemple",
                "language": "fr",
                "sense_label": "n, communication",
                "term": "/c/fr/exemple"
            },
            "surfaceText": "[[exemple]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/illustration/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fr/illustration/n/wn/cognition",
                "@type": "Node",
                "label": "illustration",
                "language": "fr",
                "sense_label": "n, cognition",
                "term": "/c/fr/illustration"
            },
            "surfaceText": "[[illustration]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fa/لحظه/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fa/لحظه/n/wn/cognition",
                "@type": "Node",
                "label": "لحظه",
                "language": "fa",
                "sense_label": "n, cognition",
                "term": "/c/fa/لحظه"
            },
            "surfaceText": "[[لحظه]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/apology/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/apology/n/wn/cognition",
                "@type": "Node",
                "label": "apology",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/apology"
            },
            "surfaceText": "[[apology]] is a type of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/misal/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/misal/n/wn/cognition",
                "@type": "Node",
                "label": "misal",
                "language": "ms",
                "sense_label": "n, cognition",
                "term": "/c/ms/misal"
            },
            "surfaceText": "[[misal]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/precedent/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/precedent/n/wn/cognition",
                "@type": "Node",
                "label": "precedent",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/precedent"
            },
            "surfaceText": "[[precedent]] is a type of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/contoh/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/contoh/n/wn/cognition",
                "@type": "Node",
                "label": "contoh",
                "language": "ms",
                "sense_label": "n, cognition",
                "term": "/c/ms/contoh"
            },
            "surfaceText": "[[contoh]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/es/ejemplo/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/es/ejemplo/n/wn/communication",
                "@type": "Node",
                "label": "ejemplo",
                "language": "es",
                "sense_label": "n, communication",
                "term": "/c/es/ejemplo"
            },
            "surfaceText": "[[ejemplo]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/example/n/wn/communication/,/c/en/admonition/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/admonition/n/wn/communication",
                "@type": "Node",
                "label": "admonition",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/admonition"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is a type of [[admonition]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/標本/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/標本/n",
                "@type": "Node",
                "label": "標本",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/標本"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/fr/exemple/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/fr/exemple",
                "@type": "Node",
                "label": "exemple",
                "language": "fr",
                "term": "/c/fr/exemple"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                },
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fa/شاهد/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fa/شاهد/n/wn/cognition",
                "@type": "Node",
                "label": "شاهد",
                "language": "fa",
                "sense_label": "n, cognition",
                "term": "/c/fa/شاهد"
            },
            "surfaceText": "[[شاهد]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/representative/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/representative/n/wn/cognition",
                "@type": "Node",
                "label": "representative",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/representative"
            },
            "surfaceText": "[[representative]] is a synonym of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例え/n/jmdict/1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例え/n/jmdict/1",
                "@type": "Node",
                "label": "例え",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例え"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例題/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例題/n",
                "@type": "Node",
                "label": "例題",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例題"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/比方/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/zh/比方/n/wn/cognition",
                "@type": "Node",
                "label": "比方",
                "language": "zh",
                "sense_label": "n, cognition",
                "term": "/c/zh/比方"
            },
            "surfaceText": "[[比方]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/お手本/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/お手本/n",
                "@type": "Node",
                "label": "お手本",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/お手本"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/sq/shembull_tipik/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/sq/shembull_tipik/n/wn/cognition",
                "@type": "Node",
                "label": "shembull tipik",
                "language": "sq",
                "sense_label": "n, cognition",
                "term": "/c/sq/shembull_tipik"
            },
            "surfaceText": "[[shembull tipik]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/実例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/実例/n",
                "@type": "Node",
                "label": "実例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/実例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/specimen/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/specimen/n/wn/cognition",
                "@type": "Node",
                "label": "specimen",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/specimen"
            },
            "surfaceText": "[[specimen]] is a type of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/引以為鑑/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/zh/引以為鑑/n/wn/communication",
                "@type": "Node",
                "label": "引以為鑑",
                "language": "zh",
                "sense_label": "n, communication",
                "term": "/c/zh/引以為鑑"
            },
            "surfaceText": "[[引以為鑑]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/eu/lezio/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/eu/lezio/n/wn/communication",
                "@type": "Node",
                "label": "lezio",
                "language": "eu",
                "sense_label": "n, communication",
                "term": "/c/eu/lezio"
            },
            "surfaceText": "[[lezio]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplify/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                },
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplify/v",
                "@type": "Node",
                "label": "exemplify",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/exemplify"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fa/مورد/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fa/مورد/n/wn/cognition",
                "@type": "Node",
                "label": "مورد",
                "language": "fa",
                "sense_label": "n, cognition",
                "term": "/c/fa/مورد"
            },
            "surfaceText": "[[مورد]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/pt/exemplo/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/pt/exemplo/n/wn/communication",
                "@type": "Node",
                "label": "exemplo",
                "language": "pt",
                "sense_label": "n, communication",
                "term": "/c/pt/exemplo"
            },
            "surfaceText": "[[exemplo]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/亀鑑/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/亀鑑/n",
                "@type": "Node",
                "label": "亀鑑",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/亀鑑"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/見せしめ/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ja/見せしめ/n/wn/communication",
                "@type": "Node",
                "label": "見せしめ",
                "language": "ja",
                "sense_label": "n, communication",
                "term": "/c/ja/見せしめ"
            },
            "surfaceText": "[[見せしめ]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/it/esempio/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/it/esempio/n/wn/communication",
                "@type": "Node",
                "label": "esempio",
                "language": "it",
                "sense_label": "n, communication",
                "term": "/c/it/esempio"
            },
            "surfaceText": "[[esempio]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/esimerkki/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fi/esimerkki/n/wn/cognition",
                "@type": "Node",
                "label": "esimerkki",
                "language": "fi",
                "sense_label": "n, cognition",
                "term": "/c/fi/esimerkki"
            },
            "surfaceText": "[[esimerkki]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/peringatan/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/peringatan/n/wn/communication",
                "@type": "Node",
                "label": "peringatan",
                "language": "ms",
                "sense_label": "n, communication",
                "term": "/c/ms/peringatan"
            },
            "surfaceText": "[[peringatan]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ja/例/n/wn/cognition",
                "@type": "Node",
                "label": "例",
                "language": "ja",
                "sense_label": "n, cognition",
                "term": "/c/ja/例"
            },
            "surfaceText": "[[例]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/eu/adibide/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/eu/adibide/n/wn/cognition",
                "@type": "Node",
                "label": "adibide",
                "language": "eu",
                "sense_label": "n, cognition",
                "term": "/c/eu/adibide"
            },
            "surfaceText": "[[adibide]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/引以為惕/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/zh/引以為惕/n/wn/communication",
                "@type": "Node",
                "label": "引以為惕",
                "language": "zh",
                "sense_label": "n, communication",
                "term": "/c/zh/引以為惕"
            },
            "surfaceText": "[[引以為惕]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/sq/ilustrim/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/sq/ilustrim/n/wn/cognition",
                "@type": "Node",
                "label": "ilustrim",
                "language": "sq",
                "sense_label": "n, cognition",
                "term": "/c/sq/ilustrim"
            },
            "surfaceText": "[[ilustrim]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/wn/act/,/c/en/exercise/n/wn/act/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/exercise/n/wn/act",
                "@type": "Node",
                "label": "exercise",
                "language": "en",
                "sense_label": "n, act",
                "term": "/c/en/exercise"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/act",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, act",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is a synonym of [[exercise]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/es/lección/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/es/lección/n/wn/communication",
                "@type": "Node",
                "label": "lección",
                "language": "es",
                "sense_label": "n, communication",
                "term": "/c/es/lección"
            },
            "surfaceText": "[[lección]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/範例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/範例/n",
                "@type": "Node",
                "label": "範例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/範例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/lesson/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/lesson/n/wn/communication",
                "@type": "Node",
                "label": "lesson",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/lesson"
            },
            "surfaceText": "[[lesson]] is a synonym of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/es/ejemplo/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/es/ejemplo/n/wn/cognition",
                "@type": "Node",
                "label": "ejemplo",
                "language": "es",
                "sense_label": "n, cognition",
                "term": "/c/es/ejemplo"
            },
            "surfaceText": "[[ejemplo]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/varoittava_esimerkki/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fi/varoittava_esimerkki/n/wn/communication",
                "@type": "Node",
                "label": "varoittava esimerkki",
                "language": "fi",
                "sense_label": "n, communication",
                "term": "/c/fi/varoittava_esimerkki"
            },
            "surfaceText": "[[varoittava esimerkki]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/opetus/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fi/opetus/n/wn/communication",
                "@type": "Node",
                "label": "opetus",
                "language": "fi",
                "sense_label": "n, communication",
                "term": "/c/fi/opetus"
            },
            "surfaceText": "[[opetus]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ca/exemple/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ca/exemple/n/wn/communication",
                "@type": "Node",
                "label": "exemple",
                "language": "ca",
                "sense_label": "n, communication",
                "term": "/c/ca/exemple"
            },
            "surfaceText": "[[exemple]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/実例/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ja/実例/n/wn/cognition",
                "@type": "Node",
                "label": "実例",
                "language": "ja",
                "sense_label": "n, cognition",
                "term": "/c/ja/実例"
            },
            "surfaceText": "[[実例]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/用例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/用例/n",
                "@type": "Node",
                "label": "用例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/用例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sh/primer/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sh/primer/n",
                "@type": "Node",
                "label": "primer",
                "language": "sh",
                "sense_label": "n",
                "term": "/c/sh/primer"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/sq/shembull/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/sq/shembull/n/wn/cognition",
                "@type": "Node",
                "label": "shembull",
                "language": "sq",
                "sense_label": "n, cognition",
                "term": "/c/sq/shembull"
            },
            "surfaceText": "[[shembull]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/teladan/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/teladan/n/wn/communication",
                "@type": "Node",
                "label": "teladan",
                "language": "id",
                "sense_label": "n, communication",
                "term": "/c/id/teladan"
            },
            "surfaceText": "[[teladan]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/見本/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/見本",
                "@type": "Node",
                "label": "見本",
                "language": "ja",
                "term": "/c/ja/見本"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/IsA/,/c/en/exception/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/IsA",
                "@type": "Relation",
                "label": "IsA"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/exception/n/wn/cognition",
                "@type": "Node",
                "label": "exception",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/exception"
            },
            "surfaceText": "[[exception]] is a type of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/it/esemplare/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/it/esemplare/n/wn/cognition",
                "@type": "Node",
                "label": "esemplare",
                "language": "it",
                "sense_label": "n, cognition",
                "term": "/c/it/esemplare"
            },
            "surfaceText": "[[esemplare]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/事例/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ja/事例/n/wn/cognition",
                "@type": "Node",
                "label": "事例",
                "language": "ja",
                "sense_label": "n, cognition",
                "term": "/c/ja/事例"
            },
            "surfaceText": "[[事例]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ar/مثل/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ar/مثل/n/wn/cognition",
                "@type": "Node",
                "label": "مَثَل",
                "language": "ar",
                "sense_label": "n, cognition",
                "term": "/c/ar/مثل"
            },
            "surfaceText": "[[مَثَل]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/no/døme/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/no/døme/n/wn/cognition",
                "@type": "Node",
                "label": "døme",
                "language": "no",
                "sense_label": "n, cognition",
                "term": "/c/no/døme"
            },
            "surfaceText": "[[døme]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/一例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/一例/n",
                "@type": "Node",
                "label": "一例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/一例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/ajaran/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/ajaran/n/wn/communication",
                "@type": "Node",
                "label": "ajaran",
                "language": "ms",
                "sense_label": "n, communication",
                "term": "/c/ms/ajaran"
            },
            "surfaceText": "[[ajaran]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例證/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例證/n",
                "@type": "Node",
                "label": "例證",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例證"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/軌範/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/軌範/n",
                "@type": "Node",
                "label": "軌範",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/軌範"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/龜鑑/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/龜鑑/n",
                "@type": "Node",
                "label": "龜鑑",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/龜鑑"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/id/contoh/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/id/contoh/n/wn/communication",
                "@type": "Node",
                "label": "contoh",
                "language": "id",
                "sense_label": "n, communication",
                "term": "/c/id/contoh"
            },
            "surfaceText": "[[contoh]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/見せしめ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/見せしめ/n",
                "@type": "Node",
                "label": "見せしめ",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/見せしめ"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/contoh_representatif/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/contoh_representatif/n/wn/cognition",
                "@type": "Node",
                "label": "contoh representatif",
                "language": "ms",
                "sense_label": "n, cognition",
                "term": "/c/ms/contoh_representatif"
            },
            "surfaceText": "[[contoh representatif]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/th/การลงโทษเป็นเยี่ยงอย่าง/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/th/การลงโทษเป็นเยี่ยงอย่าง/n/wn/communication",
                "@type": "Node",
                "label": "การลงโทษเป็นเยี่ยงอย่าง",
                "language": "th",
                "sense_label": "n, communication",
                "term": "/c/th/การลงโทษเป็นเยี่ยงอย่าง"
            },
            "surfaceText": "[[การลงโทษเป็นเยี่ยงอย่าง]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/object_lesson/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/object_lesson/n/wn/communication",
                "@type": "Node",
                "label": "object lesson",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/object_lesson"
            },
            "surfaceText": "[[object lesson]] is a synonym of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/andai/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/andai/n/wn/cognition",
                "@type": "Node",
                "label": "andai",
                "language": "ms",
                "sense_label": "n, cognition",
                "term": "/c/ms/andai"
            },
            "surfaceText": "[[andai]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/it/esempio/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/it/esempio/n/wn/cognition",
                "@type": "Node",
                "label": "esempio",
                "language": "it",
                "sense_label": "n, cognition",
                "term": "/c/it/esempio"
            },
            "surfaceText": "[[esempio]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/事例/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/事例/a",
                "@type": "Node",
                "label": "事例",
                "language": "ja",
                "sense_label": "a",
                "term": "/c/ja/事例"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/teladan/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/teladan/n/wn/communication",
                "@type": "Node",
                "label": "teladan",
                "language": "ms",
                "sense_label": "n, communication",
                "term": "/c/ms/teladan"
            },
            "surfaceText": "[[teladan]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/例証/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/例証/n",
                "@type": "Node",
                "label": "例証",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例証"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/pt/lição/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/pt/lição/n/wn/communication",
                "@type": "Node",
                "label": "lição",
                "language": "pt",
                "sense_label": "n, communication",
                "term": "/c/pt/lição"
            },
            "surfaceText": "[[lição]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ms/model/n/wn/communication/,/c/en/example/n/wn/communication/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/ms/model/n/wn/communication",
                "@type": "Node",
                "label": "model",
                "language": "ms",
                "sense_label": "n, communication",
                "term": "/c/ms/model"
            },
            "surfaceText": "[[model]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/exemple/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/fr/exemple/n/wn/cognition",
                "@type": "Node",
                "label": "exemple",
                "language": "fr",
                "sense_label": "n, cognition",
                "term": "/c/fr/exemple"
            },
            "surfaceText": "[[exemple]] is a translation of [[example]]",
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/ja/引き合い/n/jmdict/1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/jmdict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/jmdict/1.07",
                    "@type": "Source",
                    "contributor": "/s/resource/jmdict/1.07"
                }
            ],
            "start": {
                "@id": "/c/ja/引き合い/n/jmdict/1",
                "@type": "Node",
                "label": "引き合い",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/引き合い"
            },
            "surfaceText": null,
            "weight": 2.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/color/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/verbosity",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/split_words/,/s/resource/verbosity/]",
                    "@type": "Source",
                    "contributor": "/s/resource/verbosity",
                    "process": "/s/process/split_words"
                },
                {
                    "@id": "/s/resource/verbosity",
                    "@type": "Source",
                    "contributor": "/s/resource/verbosity"
                }
            ],
            "start": {
                "@id": "/c/en/color",
                "@type": "Node",
                "label": "color",
                "language": "en",
                "term": "/c/en/color"
            },
            "surfaceText": "[[color]] is related to [[example]]",
            "weight": 1.3790000000000004
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/good/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/good",
                "@type": "Node",
                "label": "good",
                "language": "en",
                "term": "/c/en/good"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/io/exemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/io/exemplo/n",
                "@type": "Node",
                "label": "exemplo",
                "language": "io",
                "sense_label": "n",
                "term": "/c/io/exemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/旗幟/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/旗幟/n",
                "@type": "Node",
                "label": "旗幟",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/旗幟"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/no/sjun/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/no/sjun/n",
                "@type": "Node",
                "label": "sjun",
                "language": "no",
                "sense_label": "n",
                "term": "/c/no/sjun"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/he/דוגמה/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/he/דוגמה/n/wikt/en_1",
                "@type": "Node",
                "label": "דוגמה",
                "language": "he",
                "sense_label": "n",
                "term": "/c/he/דוגמה"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/例え/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/例え/n",
                "@type": "Node",
                "label": "例え",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例え"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplification/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplification/n",
                "@type": "Node",
                "label": "exemplification",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/exemplification"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ba/миҫал/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ba/миҫал",
                "@type": "Node",
                "label": "миҫал",
                "language": "ba",
                "term": "/c/ba/миҫал"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/da/eksempelsætning/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/da/eksempelsætning/n",
                "@type": "Node",
                "label": "eksempelsætning",
                "language": "da",
                "sense_label": "n",
                "term": "/c/da/eksempelsætning"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/lv/piemērs/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/lv/piemērs/n",
                "@type": "Node",
                "label": "piemērs",
                "language": "lv",
                "sense_label": "n",
                "term": "/c/lv/piemērs"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/my/ဥပမာ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/my/ဥပမာ/n",
                "@type": "Node",
                "label": "ဥပမာ",
                "language": "my",
                "sense_label": "n",
                "term": "/c/my/ဥပမာ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fil/halimbawa/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fil/halimbawa/n",
                "@type": "Node",
                "label": "halimbawa",
                "language": "fil",
                "sense_label": "n",
                "term": "/c/fil/halimbawa"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/nl/voorbeeld/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/nl/voorbeeld",
                "@type": "Node",
                "label": "voorbeeld",
                "language": "nl",
                "term": "/c/nl/voorbeeld"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/da/eksempel/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/da/eksempel",
                "@type": "Node",
                "label": "eksempel",
                "language": "da",
                "term": "/c/da/eksempel"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/lv/paraugs/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/lv/paraugs",
                "@type": "Node",
                "label": "paraugs",
                "language": "lv",
                "term": "/c/lv/paraugs"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/楷模/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/楷模/n",
                "@type": "Node",
                "label": "楷模",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/楷模"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/exemplaire/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/exemplaire/a",
                "@type": "Node",
                "label": "exemplaire",
                "language": "fr",
                "sense_label": "a",
                "term": "/c/fr/exemplaire"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/be/прыклад/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/be/прыклад",
                "@type": "Node",
                "label": "прыклад",
                "language": "be",
                "term": "/c/be/прыклад"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/specimen/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/specimen/n",
                "@type": "Node",
                "label": "specimen",
                "language": "la",
                "sense_label": "n",
                "term": "/c/la/specimen"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/예/n/wikt/en_3/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/예/n/wikt/en_3",
                "@type": "Node",
                "label": "예",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/예"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/example/n/wn/cognition/,/http://wordnet-rdf.princeton.edu/wn31/105828980-n/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "http://wordnet-rdf.princeton.edu/wn31/105828980-n",
                "@type": "Node",
                "label": "105828980-n",
                "path": "/wn31/105828980-n",
                "site": "wordnet-rdf.princeton.edu",
                "site_available": true,
                "term": "http://wordnet-rdf.princeton.edu/wn31/105828980-n"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/cognition",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, cognition",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/fraude/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/fraude/n",
                "@type": "Node",
                "label": "fraude",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/fraude"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/榜樣/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/榜樣",
                "@type": "Node",
                "label": "榜樣",
                "language": "zh",
                "term": "/c/zh/榜樣"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/樣例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/樣例",
                "@type": "Node",
                "label": "樣例",
                "language": "zh",
                "term": "/c/zh/樣例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/arc/דוגמא/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/arc/דוגמא/n",
                "@type": "Node",
                "label": "דוגמא",
                "language": "arc",
                "sense_label": "n",
                "term": "/c/arc/דוגמא"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/cs/vzor/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/cs/vzor/n",
                "@type": "Node",
                "label": "vzor",
                "language": "cs",
                "sense_label": "n",
                "term": "/c/cs/vzor"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/こうれい/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/こうれい/n",
                "@type": "Node",
                "label": "こうれい",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/こうれい"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/parallel/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/parallel",
                "@type": "Node",
                "label": "parallel",
                "language": "en",
                "term": "/c/en/parallel"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sl/primerek/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sl/primerek",
                "@type": "Node",
                "label": "primerek",
                "language": "sl",
                "term": "/c/sl/primerek"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/de/muster/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/muster/n",
                "@type": "Node",
                "label": "muster",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/muster"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hy/օրինակ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hy/օրինակ/n",
                "@type": "Node",
                "label": "օրինակ",
                "language": "hy",
                "sense_label": "n",
                "term": "/c/hy/օրինակ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/whistlestop_tour/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/whistlestop_tour/n",
                "@type": "Node",
                "label": "whistlestop tour",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/whistlestop_tour"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/el/παράδειγμα/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/el/παράδειγμα/n",
                "@type": "Node",
                "label": "παράδειγμα",
                "language": "el",
                "sense_label": "n",
                "term": "/c/el/παράδειγμα"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ca/exemple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ca/exemple/n",
                "@type": "Node",
                "label": "exemple",
                "language": "ca",
                "sense_label": "n",
                "term": "/c/ca/exemple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/swatch/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/swatch/n/wikt/en_1",
                "@type": "Node",
                "label": "swatch",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/swatch"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/et/näide/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/et/näide/n",
                "@type": "Node",
                "label": "näide",
                "language": "et",
                "sense_label": "n",
                "term": "/c/et/näide"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/lad/egzempyo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/lad/egzempyo/n",
                "@type": "Node",
                "label": "egzempyo",
                "language": "lad",
                "sense_label": "n",
                "term": "/c/lad/egzempyo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/hy/օրինակ/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/hy/օրինակ",
                "@type": "Node",
                "label": "օրինակ",
                "language": "hy",
                "term": "/c/hy/օրինակ"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ga/patrún/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ga/patrún/n",
                "@type": "Node",
                "label": "patrún",
                "language": "ga",
                "sense_label": "n",
                "term": "/c/ga/patrún"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/no/døme/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/no/døme/n/wikt/en_1",
                "@type": "Node",
                "label": "døme",
                "language": "no",
                "sense_label": "n",
                "term": "/c/no/døme"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/bizen/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/bizen/n",
                "@type": "Node",
                "label": "bizen",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/bizen"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/he/משל/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/he/משל/n",
                "@type": "Node",
                "label": "משל",
                "language": "he",
                "sense_label": "n",
                "term": "/c/he/משל"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/ääriesimerkki/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/ääriesimerkki/n",
                "@type": "Node",
                "label": "ääriesimerkki",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/ääriesimerkki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/type_site/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/type_site/n",
                "@type": "Node",
                "label": "type site",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/type_site"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/EtymologicallyDerivedFrom/,/c/en/example/,/c/enm/exaumple/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/enm/exaumple",
                "@type": "Node",
                "label": "exaumple",
                "language": "enm",
                "term": "/c/enm/exaumple"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyDerivedFrom",
                "@type": "Relation",
                "label": "EtymologicallyDerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ba/миҫал/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ba/миҫал/n",
                "@type": "Node",
                "label": "миҫал",
                "language": "ba",
                "sense_label": "n",
                "term": "/c/ba/миҫал"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/vaguery/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/vaguery/n",
                "@type": "Node",
                "label": "vaguery",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/vaguery"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ady/бзыпхъэ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ady/бзыпхъэ/n",
                "@type": "Node",
                "label": "бзыпхъэ",
                "language": "ady",
                "sense_label": "n",
                "term": "/c/ady/бзыпхъэ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/havaintoesimerkki/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/havaintoesimerkki/n",
                "@type": "Node",
                "label": "havaintoesimerkki",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/havaintoesimerkki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exampled/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exampled/v",
                "@type": "Node",
                "label": "exampled",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/exampled"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/xcl/կանոն/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/xcl/կանոն/n",
                "@type": "Node",
                "label": "կանոն",
                "language": "xcl",
                "sense_label": "n",
                "term": "/c/xcl/կանոն"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/nonexample/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/nonexample/n",
                "@type": "Node",
                "label": "nonexample",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/nonexample"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/典範/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/典範/n",
                "@type": "Node",
                "label": "典範",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/典範"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/lt/pavyzdys/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/lt/pavyzdys",
                "@type": "Node",
                "label": "pavyzdys",
                "language": "lt",
                "term": "/c/lt/pavyzdys"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/muster/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/muster/n",
                "@type": "Node",
                "label": "muster",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/muster"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/rm/exempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/rm/exempel/n",
                "@type": "Node",
                "label": "exempel",
                "language": "rm",
                "sense_label": "n",
                "term": "/c/rm/exempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/verbigracia/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/verbigracia/n",
                "@type": "Node",
                "label": "verbigracia",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/verbigracia"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/no/eksempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/no/eksempel/n",
                "@type": "Node",
                "label": "eksempel",
                "language": "no",
                "sense_label": "n",
                "term": "/c/no/eksempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/exhibitio/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/exhibitio/n",
                "@type": "Node",
                "label": "exhibitio",
                "language": "la",
                "sense_label": "n",
                "term": "/c/la/exhibitio"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/例子/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/例子/n",
                "@type": "Node",
                "label": "例子",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/例子"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/crh/misal/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/crh/misal/n",
                "@type": "Node",
                "label": "misal",
                "language": "crh",
                "sense_label": "n",
                "term": "/c/crh/misal"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/标兵/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/标兵",
                "@type": "Node",
                "label": "标兵",
                "language": "zh",
                "term": "/c/zh/标兵"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/hyperbole/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/hyperbole/n",
                "@type": "Node",
                "label": "hyperbole",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/hyperbole"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/例文/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/例文/n",
                "@type": "Node",
                "label": "例文",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例文"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/chef_d'œuvre/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/chef_d'œuvre/n",
                "@type": "Node",
                "label": "chef d'œuvre",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/chef_d'œuvre"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fa/دستور/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fa/دستور/n",
                "@type": "Node",
                "label": "دستور",
                "language": "fa",
                "sense_label": "n",
                "term": "/c/fa/دستور"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/學壞/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/學壞/v",
                "@type": "Node",
                "label": "學壞",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/學壞"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/beispiel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/beispiel/n",
                "@type": "Node",
                "label": "beispiel",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/beispiel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/例证/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/例证",
                "@type": "Node",
                "label": "例证",
                "language": "zh",
                "term": "/c/zh/例证"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/unexemplified/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/unexemplified/a",
                "@type": "Node",
                "label": "unexemplified",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/unexemplified"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hi/उदाहरण/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hi/उदाहरण/n",
                "@type": "Node",
                "label": "उदाहरण",
                "language": "hi",
                "sense_label": "n",
                "term": "/c/hi/उदाहरण"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fa/نمونه/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fa/نمونه/n",
                "@type": "Node",
                "label": "نمونه",
                "language": "fa",
                "sense_label": "n",
                "term": "/c/fa/نمونه"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ru/пример/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ru/пример",
                "@type": "Node",
                "label": "пример",
                "language": "ru",
                "term": "/c/ru/пример"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/qu/hina/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/qu/hina/n",
                "@type": "Node",
                "label": "hina",
                "language": "qu",
                "sense_label": "n",
                "term": "/c/qu/hina"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/舉凡/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/舉凡/r",
                "@type": "Node",
                "label": "舉凡",
                "language": "zh",
                "sense_label": "r",
                "term": "/c/zh/舉凡"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/is/fordæmi/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/is/fordæmi/n",
                "@type": "Node",
                "label": "fordæmi",
                "language": "is",
                "sense_label": "n",
                "term": "/c/is/fordæmi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/宗法/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/宗法/v",
                "@type": "Node",
                "label": "宗法",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/宗法"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/赤幟/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/赤幟/n",
                "@type": "Node",
                "label": "赤幟",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/赤幟"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pt/via/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pt/via/n/wikt/en_1",
                "@type": "Node",
                "label": "via",
                "language": "pt",
                "sense_label": "n",
                "term": "/c/pt/via"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/grc/τύποσ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/grc/τύποσ/n",
                "@type": "Node",
                "label": "τύποσ",
                "language": "grc",
                "sense_label": "n",
                "term": "/c/grc/τύποσ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/set_pace/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/set_pace/v",
                "@type": "Node",
                "label": "set pace",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/set_pace"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/exemple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/exemple/n",
                "@type": "Node",
                "label": "exemple",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/exemple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/object_lesson/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/object_lesson/n",
                "@type": "Node",
                "label": "object lesson",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/object_lesson"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/unicum/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/unicum/n",
                "@type": "Node",
                "label": "unicum",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/unicum"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/dsb/pśikład/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/dsb/pśikład",
                "@type": "Node",
                "label": "pśikład",
                "language": "dsb",
                "term": "/c/dsb/pśikład"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/deckplate_leader/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/deckplate_leader/n",
                "@type": "Node",
                "label": "deckplate leader",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/deckplate_leader"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/舉隅/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/舉隅/v",
                "@type": "Node",
                "label": "舉隅",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/舉隅"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/illustrate/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/illustrate/v",
                "@type": "Node",
                "label": "illustrate",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/illustrate"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/본/n/wikt/en_2/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/본/n/wikt/en_2",
                "@type": "Node",
                "label": "본",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/본"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܡܚܙܝܬܐ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܡܚܙܝܬܐ/n",
                "@type": "Node",
                "label": "ܡܚܙܝܬܐ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܡܚܙܝܬܐ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/paradigma/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/paradigma/n",
                "@type": "Node",
                "label": "paradigma",
                "language": "la",
                "sense_label": "n",
                "term": "/c/la/paradigma"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ta/எடுத்துக்காட்டு/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ta/எடுத்துக்காட்டு",
                "@type": "Node",
                "label": "எடுத்துக்காட்டு",
                "language": "ta",
                "term": "/c/ta/எடுத்துக்காட்டு"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ar/امتثل/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ar/امتثل/v",
                "@type": "Node",
                "label": "امتثل",
                "language": "ar",
                "sense_label": "v",
                "term": "/c/ar/امتثل"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mr/उदाहरण/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mr/उदाहरण/n",
                "@type": "Node",
                "label": "उदाहरण",
                "language": "mr",
                "sense_label": "n",
                "term": "/c/mr/उदाहरण"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ja/例題/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ja/例題",
                "@type": "Node",
                "label": "例題",
                "language": "ja",
                "term": "/c/ja/例題"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/take_after/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/take_after/v",
                "@type": "Node",
                "label": "take after",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/take_after"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/crh/misal/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/crh/misal",
                "@type": "Node",
                "label": "misal",
                "language": "crh",
                "term": "/c/crh/misal"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/điển_hình/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/điển_hình/n",
                "@type": "Node",
                "label": "điển hình",
                "language": "vi",
                "sense_label": "n",
                "term": "/c/vi/điển_hình"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/bal/نمونہ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/bal/نمونہ/n",
                "@type": "Node",
                "label": "نمونہ",
                "language": "bal",
                "sense_label": "n",
                "term": "/c/bal/نمونہ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/UsedFor/,/c/en/example/,/c/en/explain/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/explain",
                "@type": "Node",
                "label": "explain something",
                "language": "en",
                "term": "/c/en/explain"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/UsedFor",
                "@type": "Relation",
                "label": "UsedFor"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/pavlos/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/pavlos"
                }
            ],
            "start": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "an example",
                "language": "en",
                "term": "/c/en/example"
            },
            "surfaceText": "You can use [[an example]] to [[explain something]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/id/contoh/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/id/contoh",
                "@type": "Node",
                "label": "contoh",
                "language": "id",
                "term": "/c/id/contoh"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ga/léiriú/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ga/léiriú/n",
                "@type": "Node",
                "label": "léiriú",
                "language": "ga",
                "sense_label": "n",
                "term": "/c/ga/léiriú"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/specimen/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/specimen/n",
                "@type": "Node",
                "label": "specimen",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/specimen"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/zh/榜样/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/zh/榜样",
                "@type": "Node",
                "label": "榜样",
                "language": "zh",
                "term": "/c/zh/榜样"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/hi/नमूना/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/hi/नमूना",
                "@type": "Node",
                "label": "नमूना",
                "language": "hi",
                "term": "/c/hi/नमूना"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/DerivedFrom/,/c/en/nonexample/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/DerivedFrom",
                "@type": "Relation",
                "label": "DerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/nonexample",
                "@type": "Node",
                "label": "nonexample",
                "language": "en",
                "term": "/c/en/nonexample"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ang/gelicnes/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ang/gelicnes/n",
                "@type": "Node",
                "label": "gelicnes",
                "language": "ang",
                "sense_label": "n",
                "term": "/c/ang/gelicnes"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/HasPrerequisite/,/c/en/illustrating_point/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/conceptnet/4/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "an example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/HasPrerequisite",
                "@type": "Relation",
                "label": "HasPrerequisite"
            },
            "sources": [
                {
                    "@id": "/and/[/s/activity/omcs/omcs1_possibly_free_text/,/s/contributor/omcs/loiosh/]",
                    "@type": "Source",
                    "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                    "contributor": "/s/contributor/omcs/loiosh"
                }
            ],
            "start": {
                "@id": "/c/en/illustrating_point",
                "@type": "Node",
                "label": "illustrating a point",
                "language": "en",
                "term": "/c/en/illustrating_point"
            },
            "surfaceText": "[[illustrating a point]] requires [[an example]]",
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/esikuva/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/esikuva/n",
                "@type": "Node",
                "label": "esikuva",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/esikuva"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/gu/ઉદાહરણ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/gu/ઉદાહરણ/n",
                "@type": "Node",
                "label": "ઉદાહરણ",
                "language": "gu",
                "sense_label": "n",
                "term": "/c/gu/ઉદાહરણ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ja/例え/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ja/例え",
                "@type": "Node",
                "label": "例え",
                "language": "ja",
                "term": "/c/ja/例え"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/spacefiller/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/spacefiller/n",
                "@type": "Node",
                "label": "spacefiller",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/spacefiller"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/template/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/template",
                "@type": "Node",
                "label": "template",
                "language": "en",
                "term": "/c/en/template"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ang/bysnian/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ang/bysnian/v",
                "@type": "Node",
                "label": "bysnian",
                "language": "ang",
                "sense_label": "v",
                "term": "/c/ang/bysnian"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hu/példa/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hu/példa/n",
                "@type": "Node",
                "label": "példa",
                "language": "hu",
                "sense_label": "n",
                "term": "/c/hu/példa"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/exempli_loco/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/exempli_loco/r",
                "@type": "Node",
                "label": "exempli loco",
                "language": "la",
                "sense_label": "r",
                "term": "/c/la/exempli_loco"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/ล้าง/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/ล้าง/v",
                "@type": "Node",
                "label": "ล้าง",
                "language": "th",
                "sense_label": "v",
                "term": "/c/th/ล้าง"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/kl/assersuut/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/kl/assersuut/n",
                "@type": "Node",
                "label": "assersuut",
                "language": "kl",
                "sense_label": "n",
                "term": "/c/kl/assersuut"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/te/ఉదాహరణము/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/te/ఉదాహరణము/n",
                "@type": "Node",
                "label": "ఉదాహరణము",
                "language": "te",
                "sense_label": "n",
                "term": "/c/te/ఉదాహరణము"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/pattern/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/pattern/n",
                "@type": "Node",
                "label": "pattern",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/pattern"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ar/مثل/n/wikt/en_4/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ar/مثل/n/wikt/en_4",
                "@type": "Node",
                "label": "مثل",
                "language": "ar",
                "sense_label": "n",
                "term": "/c/ar/مثل"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hi/मिसाल/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hi/मिसाल/n",
                "@type": "Node",
                "label": "मिसाल",
                "language": "hi",
                "sense_label": "n",
                "term": "/c/hi/मिसाल"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/prachtvoorbeeld/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/prachtvoorbeeld/n",
                "@type": "Node",
                "label": "prachtvoorbeeld",
                "language": "nl",
                "sense_label": "n",
                "term": "/c/nl/prachtvoorbeeld"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/behaviour/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/behaviour",
                "@type": "Node",
                "label": "behaviour",
                "language": "en",
                "term": "/c/en/behaviour"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/yi/בײשפיל/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/yi/בײשפיל/n",
                "@type": "Node",
                "label": "בײשפיל",
                "language": "yi",
                "sense_label": "n",
                "term": "/c/yi/בײשפיל"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/cu/ⱂⱃⰹⱅⱏⱍⰰ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/cu/ⱂⱃⰹⱅⱏⱍⰰ/n",
                "@type": "Node",
                "label": "ⱂⱃⰹⱅⱏⱍⰰ",
                "language": "cu",
                "sense_label": "n",
                "term": "/c/cu/ⱂⱃⰹⱅⱏⱍⰰ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/事例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/事例",
                "@type": "Node",
                "label": "事例",
                "language": "zh",
                "term": "/c/zh/事例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ru/прецедент/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ru/прецедент/n",
                "@type": "Node",
                "label": "прецедент",
                "language": "ru",
                "sense_label": "n",
                "term": "/c/ru/прецедент"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/precept/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/precept",
                "@type": "Node",
                "label": "precept",
                "language": "en",
                "term": "/c/en/precept"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/paradigma/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/paradigma/n",
                "@type": "Node",
                "label": "paradigma",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/paradigma"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/regular/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/regular/a",
                "@type": "Node",
                "label": "regular",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/regular"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/grc/παράδειγμα/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/grc/παράδειγμα/n",
                "@type": "Node",
                "label": "παράδειγμα",
                "language": "grc",
                "sense_label": "n",
                "term": "/c/grc/παράδειγμα"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/showhome/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/showhome/n",
                "@type": "Node",
                "label": "showhome",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/showhome"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/jim_dandy/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/jim_dandy/n",
                "@type": "Node",
                "label": "jim dandy",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/jim_dandy"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hil/huaran/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hil/huaran/n",
                "@type": "Node",
                "label": "huaran",
                "language": "hil",
                "sense_label": "n",
                "term": "/c/hil/huaran"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nci/imachiyo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nci/imachiyo/n",
                "@type": "Node",
                "label": "imachiyo",
                "language": "nci",
                "sense_label": "n",
                "term": "/c/nci/imachiyo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/FormOf/,/c/en/examples/,/c/en/example/n/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/FormOf",
                "@type": "Relation",
                "label": "FormOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/examples",
                "@type": "Node",
                "label": "examples",
                "language": "en",
                "term": "/c/en/examples"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܢܝܫܐ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܢܝܫܐ/n",
                "@type": "Node",
                "label": "ܢܝܫܐ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܢܝܫܐ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/de/exempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/exempel/n",
                "@type": "Node",
                "label": "exempel",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/exempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/prendre_exemple/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/prendre_exemple/v",
                "@type": "Node",
                "label": "prendre exemple",
                "language": "fr",
                "sense_label": "v",
                "term": "/c/fr/prendre_exemple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/eu/adibide/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/eu/adibide",
                "@type": "Node",
                "label": "adibide",
                "language": "eu",
                "term": "/c/eu/adibide"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ang/bysen/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ang/bysen/n",
                "@type": "Node",
                "label": "bysen",
                "language": "ang",
                "sense_label": "n",
                "term": "/c/ang/bysen"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ur/مثال/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ur/مثال",
                "@type": "Node",
                "label": "مثال",
                "language": "ur",
                "term": "/c/ur/مثال"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/grc/ἐπίδειξισ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/grc/ἐπίδειξισ/n",
                "@type": "Node",
                "label": "ἐπίδειξισ",
                "language": "grc",
                "sense_label": "n",
                "term": "/c/grc/ἐπίδειξισ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/標竿/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/標竿/n",
                "@type": "Node",
                "label": "標竿",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/標竿"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/보기/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/보기/n/wikt/en_1",
                "@type": "Node",
                "label": "보기",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/보기"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/FormOf/,/c/en/exampled/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/FormOf",
                "@type": "Relation",
                "label": "FormOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exampled/v",
                "@type": "Node",
                "label": "exampled",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/exampled"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/mẫu_mực/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/mẫu_mực/n",
                "@type": "Node",
                "label": "mẫu mực",
                "language": "vi",
                "sense_label": "n",
                "term": "/c/vi/mẫu_mực"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mwl/eisemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mwl/eisemplo/n",
                "@type": "Node",
                "label": "eisemplo",
                "language": "mwl",
                "sense_label": "n",
                "term": "/c/mwl/eisemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nds/bispill/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nds/bispill/n",
                "@type": "Node",
                "label": "bispill",
                "language": "nds",
                "sense_label": "n",
                "term": "/c/nds/bispill"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/my/နမူနာ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/my/နမူနာ/n",
                "@type": "Node",
                "label": "နမူနာ",
                "language": "my",
                "sense_label": "n",
                "term": "/c/my/နမူနာ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/xh/umzekelo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/xh/umzekelo/n",
                "@type": "Node",
                "label": "umzekelo",
                "language": "xh",
                "sense_label": "n",
                "term": "/c/xh/umzekelo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/ensample/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/ensample/n",
                "@type": "Node",
                "label": "ensample",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/ensample"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fro/essamplaire/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fro/essamplaire/n",
                "@type": "Node",
                "label": "essamplaire",
                "language": "fro",
                "sense_label": "n",
                "term": "/c/fro/essamplaire"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/pattern/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/pattern",
                "@type": "Node",
                "label": "pattern",
                "language": "en",
                "term": "/c/en/pattern"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/示例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/示例/n",
                "@type": "Node",
                "label": "示例",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/示例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/bisne/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/bisne/n",
                "@type": "Node",
                "label": "bisne",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/bisne"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/范/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/范",
                "@type": "Node",
                "label": "范",
                "language": "zh",
                "term": "/c/zh/范"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܕܡܘܬܐ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܕܡܘܬܐ/n",
                "@type": "Node",
                "label": "ܕܡܘܬܐ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܕܡܘܬܐ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/sovellusesimerkki/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/sovellusesimerkki/n",
                "@type": "Node",
                "label": "sovellusesimerkki",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/sovellusesimerkki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/lv/piemērs/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/lv/piemērs",
                "@type": "Node",
                "label": "piemērs",
                "language": "lv",
                "term": "/c/lv/piemērs"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/archetype/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/archetype/n",
                "@type": "Node",
                "label": "archetype",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/archetype"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/อุทาหรณ์/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/อุทาหรณ์/n",
                "@type": "Node",
                "label": "อุทาหรณ์",
                "language": "th",
                "sense_label": "n",
                "term": "/c/th/อุทาหรณ์"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/xcl/օրինակ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/xcl/օրինակ/n",
                "@type": "Node",
                "label": "օրինակ",
                "language": "xcl",
                "sense_label": "n",
                "term": "/c/xcl/օրինակ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mk/пример/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mk/пример/n",
                "@type": "Node",
                "label": "пример",
                "language": "mk",
                "sense_label": "n",
                "term": "/c/mk/пример"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/楷模/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/楷模",
                "@type": "Node",
                "label": "楷模",
                "language": "zh",
                "term": "/c/zh/楷模"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/เช่น/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/เช่น/n",
                "@type": "Node",
                "label": "เช่น",
                "language": "th",
                "sense_label": "n",
                "term": "/c/th/เช่น"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/実例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/実例/n",
                "@type": "Node",
                "label": "実例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/実例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/ejemplar/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/ejemplar/n",
                "@type": "Node",
                "label": "ejemplar",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/ejemplar"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hil/ehemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hil/ehemplo/n",
                "@type": "Node",
                "label": "ehemplo",
                "language": "hil",
                "sense_label": "n",
                "term": "/c/hil/ehemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/範/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/範",
                "@type": "Node",
                "label": "範",
                "language": "zh",
                "term": "/c/zh/範"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/bal/نمونہ/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/bal/نمونہ",
                "@type": "Node",
                "label": "نمونہ",
                "language": "bal",
                "term": "/c/bal/نمونہ"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/nontest/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/nontest/a",
                "@type": "Node",
                "label": "nontest",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/nontest"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/precedent/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/precedent",
                "@type": "Node",
                "label": "precedent",
                "language": "en",
                "term": "/c/en/precedent"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/byword/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/byword/n",
                "@type": "Node",
                "label": "byword",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/byword"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/no/eksempel/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/no/eksempel",
                "@type": "Node",
                "label": "eksempel",
                "language": "no",
                "term": "/c/no/eksempel"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ur/اداہرن/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ur/اداہرن/n",
                "@type": "Node",
                "label": "اداہرن",
                "language": "ur",
                "sense_label": "n",
                "term": "/c/ur/اداہرن"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/đơn_cử/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/đơn_cử/v",
                "@type": "Node",
                "label": "đơn cử",
                "language": "vi",
                "sense_label": "v",
                "term": "/c/vi/đơn_cử"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/dechado/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/dechado/n",
                "@type": "Node",
                "label": "dechado",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/dechado"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/escarmiento/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/escarmiento/n",
                "@type": "Node",
                "label": "escarmiento",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/escarmiento"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/zh/例/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/zh/例",
                "@type": "Node",
                "label": "例",
                "language": "zh",
                "term": "/c/zh/例"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/gu/દા.ત/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/gu/દા.ત/r",
                "@type": "Node",
                "label": "દા.ત",
                "language": "gu",
                "sense_label": "r",
                "term": "/c/gu/દા.ત"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/例",
                "@type": "Node",
                "label": "例",
                "language": "zh",
                "term": "/c/zh/例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ko/例/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ko/例",
                "@type": "Node",
                "label": "例",
                "language": "ko",
                "term": "/c/ko/例"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/faire_école/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/faire_école/v",
                "@type": "Node",
                "label": "faire école",
                "language": "fr",
                "sense_label": "v",
                "term": "/c/fr/faire_école"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/cy/enghraifft/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/cy/enghraifft",
                "@type": "Node",
                "label": "enghraifft",
                "language": "cy",
                "term": "/c/cy/enghraifft"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/標本/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/標本/n",
                "@type": "Node",
                "label": "標本",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/標本"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/dsb/pśikład/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/dsb/pśikład/n",
                "@type": "Node",
                "label": "pśikład",
                "language": "dsb",
                "sense_label": "n",
                "term": "/c/dsb/pśikład"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/ideaal/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/ideaal/n",
                "@type": "Node",
                "label": "ideaal",
                "language": "nl",
                "sense_label": "n",
                "term": "/c/nl/ideaal"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ms/contoh/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ms/contoh",
                "@type": "Node",
                "label": "contoh",
                "language": "ms",
                "term": "/c/ms/contoh"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/voorbeeld/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/voorbeeld/n",
                "@type": "Node",
                "label": "voorbeeld",
                "language": "nl",
                "sense_label": "n",
                "term": "/c/nl/voorbeeld"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/適例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/適例/n",
                "@type": "Node",
                "label": "適例",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/適例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/mannekiini/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/mannekiini/n",
                "@type": "Node",
                "label": "mannekiini",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/mannekiini"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/stq/biespil/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/stq/biespil/n",
                "@type": "Node",
                "label": "biespil",
                "language": "stq",
                "sense_label": "n",
                "term": "/c/stq/biespil"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/stq/bispil/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/stq/bispil/n",
                "@type": "Node",
                "label": "bispil",
                "language": "stq",
                "sense_label": "n",
                "term": "/c/stq/bispil"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/榜样/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/榜样",
                "@type": "Node",
                "label": "榜样",
                "language": "zh",
                "term": "/c/zh/榜样"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/師法/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/師法/v",
                "@type": "Node",
                "label": "師法",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/師法"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sw/mfano/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sw/mfano/n",
                "@type": "Node",
                "label": "mfano",
                "language": "sw",
                "sense_label": "n",
                "term": "/c/sw/mfano"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/為例/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/為例/v",
                "@type": "Node",
                "label": "為例",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/為例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/rule/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/rule",
                "@type": "Node",
                "label": "rule",
                "language": "en",
                "term": "/c/en/rule"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/villain/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/villain/n",
                "@type": "Node",
                "label": "villain",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/villain"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/dẫn_chứng/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/dẫn_chứng/n",
                "@type": "Node",
                "label": "dẫn chứng",
                "language": "vi",
                "sense_label": "n",
                "term": "/c/vi/dẫn_chứng"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܐܬܐ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܐܬܐ/n",
                "@type": "Node",
                "label": "ܐܬܐ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܐܬܐ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/eu/adibide/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/eu/adibide/n",
                "@type": "Node",
                "label": "adibide",
                "language": "eu",
                "sense_label": "n",
                "term": "/c/eu/adibide"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/voorbeeldzin/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/voorbeeldzin/n",
                "@type": "Node",
                "label": "voorbeeldzin",
                "language": "nl",
                "sense_label": "n",
                "term": "/c/nl/voorbeeldzin"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/praelego/v/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/praelego/v/wikt/en_1",
                "@type": "Node",
                "label": "praelego",
                "language": "la",
                "sense_label": "v",
                "term": "/c/la/praelego"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/saumple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/saumple/n",
                "@type": "Node",
                "label": "saumple",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/saumple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fo/fyridømi/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fo/fyridømi/n",
                "@type": "Node",
                "label": "fyridømi",
                "language": "fo",
                "sense_label": "n",
                "term": "/c/fo/fyridømi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/case_in_point/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/case_in_point/n",
                "@type": "Node",
                "label": "case in point",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/case_in_point"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/cu/оуказъ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/cu/оуказъ/n",
                "@type": "Node",
                "label": "оуказъ",
                "language": "cu",
                "sense_label": "n",
                "term": "/c/cu/оуказъ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/hi/मिसाल/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/hi/मिसाल",
                "@type": "Node",
                "label": "मिसाल",
                "language": "hi",
                "term": "/c/hi/मिसाल"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hi/मसल/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hi/मसल/n",
                "@type": "Node",
                "label": "मसल",
                "language": "hi",
                "sense_label": "n",
                "term": "/c/hi/मसल"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ia/exemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ia/exemplo/n",
                "@type": "Node",
                "label": "exemplo",
                "language": "ia",
                "sense_label": "n",
                "term": "/c/ia/exemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fy/foarbyld/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fy/foarbyld/n",
                "@type": "Node",
                "label": "foarbyld",
                "language": "fy",
                "sense_label": "n",
                "term": "/c/fy/foarbyld"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/pattern/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/pattern/n",
                "@type": "Node",
                "label": "pattern",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/pattern"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/反面教材/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/反面教材/n",
                "@type": "Node",
                "label": "反面教材",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/反面教材"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/gl/exemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/gl/exemplo/n",
                "@type": "Node",
                "label": "exemplo",
                "language": "gl",
                "sense_label": "n",
                "term": "/c/gl/exemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/EtymologicallyDerivedFrom/,/c/en/example/,/c/la/exemplum/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/la/exemplum",
                "@type": "Node",
                "label": "exemplum",
                "language": "la",
                "term": "/c/la/exemplum"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyDerivedFrom",
                "@type": "Relation",
                "label": "EtymologicallyDerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fi/esimerkki/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/esimerkki/n",
                "@type": "Node",
                "label": "esimerkki",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/esimerkki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/bg/пример/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/bg/пример",
                "@type": "Node",
                "label": "пример",
                "language": "bg",
                "term": "/c/bg/пример"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/pa/ਉਦਾਹਰਨ/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/pa/ਉਦਾਹਰਨ",
                "@type": "Node",
                "label": "ਉਦਾਹਰਨ",
                "language": "pa",
                "term": "/c/pa/ਉਦਾਹਰਨ"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ceb/modelo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ceb/modelo/n",
                "@type": "Node",
                "label": "modelo",
                "language": "ceb",
                "sense_label": "n",
                "term": "/c/ceb/modelo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/model/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/model",
                "@type": "Node",
                "label": "model",
                "language": "en",
                "term": "/c/en/model"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/cs/příklad/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/cs/příklad/n",
                "@type": "Node",
                "label": "příklad",
                "language": "cs",
                "sense_label": "n",
                "term": "/c/cs/příklad"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/lb/beispill/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/lb/beispill/n",
                "@type": "Node",
                "label": "beispill",
                "language": "lb",
                "sense_label": "n",
                "term": "/c/lb/beispill"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/典範/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/典範",
                "@type": "Node",
                "label": "典範",
                "language": "zh",
                "term": "/c/zh/典範"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/exaumple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/exaumple/n",
                "@type": "Node",
                "label": "exaumple",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/exaumple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/一例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/一例/n",
                "@type": "Node",
                "label": "一例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/一例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/epitome/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/epitome/n",
                "@type": "Node",
                "label": "epitome",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/epitome"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/praeiudicium/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/praeiudicium/n",
                "@type": "Node",
                "label": "praeiudicium",
                "language": "la",
                "sense_label": "n",
                "term": "/c/la/praeiudicium"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/instance/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/instance/v",
                "@type": "Node",
                "label": "instance",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/instance"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/exemplary/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/exemplary",
                "@type": "Node",
                "label": "exemplary",
                "language": "en",
                "term": "/c/en/exemplary"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ko/보기/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ko/보기",
                "@type": "Node",
                "label": "보기",
                "language": "ko",
                "term": "/c/ko/보기"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/bispel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/bispel/n",
                "@type": "Node",
                "label": "bispel",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/bispel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/da/eksempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/da/eksempel/n",
                "@type": "Node",
                "label": "eksempel",
                "language": "da",
                "sense_label": "n",
                "term": "/c/da/eksempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ro/tâlc/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ro/tâlc/n",
                "@type": "Node",
                "label": "tâlc",
                "language": "ro",
                "sense_label": "n",
                "term": "/c/ro/tâlc"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/personify/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/personify/v",
                "@type": "Node",
                "label": "personify",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/personify"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/grc/χρῆσισ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/grc/χρῆσισ/n",
                "@type": "Node",
                "label": "χρῆσισ",
                "language": "grc",
                "sense_label": "n",
                "term": "/c/grc/χρῆσισ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/no/sjon/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/no/sjon/n",
                "@type": "Node",
                "label": "sjon",
                "language": "no",
                "sense_label": "n",
                "term": "/c/no/sjon"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/calaña/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/calaña/n",
                "@type": "Node",
                "label": "calaña",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/calaña"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/tr/takip/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/tr/takip/n",
                "@type": "Node",
                "label": "takip",
                "language": "tr",
                "sense_label": "n",
                "term": "/c/tr/takip"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hy/նմուշ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hy/նմուշ/n",
                "@type": "Node",
                "label": "նմուշ",
                "language": "hy",
                "sense_label": "n",
                "term": "/c/hy/նմուշ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/pt/exemplo/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/pt/exemplo",
                "@type": "Node",
                "label": "exemplo",
                "language": "pt",
                "term": "/c/pt/exemplo"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/uk/приклад/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/uk/приклад",
                "@type": "Node",
                "label": "приклад",
                "language": "uk",
                "term": "/c/uk/приклад"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ru/образец/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ru/образец/n",
                "@type": "Node",
                "label": "образец",
                "language": "ru",
                "sense_label": "n",
                "term": "/c/ru/образец"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/analogy/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/analogy",
                "@type": "Node",
                "label": "analogy",
                "language": "en",
                "term": "/c/en/analogy"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/xcl/ցոյց/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/xcl/ցոյց/n",
                "@type": "Node",
                "label": "ցոյց",
                "language": "xcl",
                "sense_label": "n",
                "term": "/c/xcl/ցոյց"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/rm/exaimpel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/rm/exaimpel/n",
                "@type": "Node",
                "label": "exaimpel",
                "language": "rm",
                "sense_label": "n",
                "term": "/c/rm/exaimpel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/ตุ๊กตา/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/ตุ๊กตา/n",
                "@type": "Node",
                "label": "ตุ๊กตา",
                "language": "th",
                "sense_label": "n",
                "term": "/c/th/ตุ๊กตา"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/lo/ຕົວຢ່າງ/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/lo/ຕົວຢ່າງ",
                "@type": "Node",
                "label": "ຕົວຢ່າງ",
                "language": "lo",
                "term": "/c/lo/ຕົວຢ່າງ"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/mk/пример/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/mk/пример",
                "@type": "Node",
                "label": "пример",
                "language": "mk",
                "term": "/c/mk/пример"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/lad/enshemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/lad/enshemplo/n",
                "@type": "Node",
                "label": "enshemplo",
                "language": "lad",
                "sense_label": "n",
                "term": "/c/lad/enshemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/grc/παραδειγματίζω/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/grc/παραδειγματίζω/v",
                "@type": "Node",
                "label": "παραδειγματίζω",
                "language": "grc",
                "sense_label": "v",
                "term": "/c/grc/παραδειγματίζω"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/textbook/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/textbook/a",
                "@type": "Node",
                "label": "textbook",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/textbook"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/ostentatus/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/ostentatus",
                "@type": "Node",
                "label": "ostentatus",
                "language": "la",
                "term": "/c/la/ostentatus"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sco/ensaumple/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sco/ensaumple",
                "@type": "Node",
                "label": "ensaumple",
                "language": "sco",
                "term": "/c/sco/ensaumple"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/eksemplaari/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/eksemplaari/n",
                "@type": "Node",
                "label": "eksemplaari",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/eksemplaari"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ru/пример/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ru/пример/n",
                "@type": "Node",
                "label": "пример",
                "language": "ru",
                "sense_label": "n",
                "term": "/c/ru/пример"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sw/mfano/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sw/mfano",
                "@type": "Node",
                "label": "mfano",
                "language": "sw",
                "term": "/c/sw/mfano"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/examples/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/examples/n",
                "@type": "Node",
                "label": "examples",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/examples"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ar/مثال/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ar/مثال",
                "@type": "Node",
                "label": "مثال",
                "language": "ar",
                "term": "/c/ar/مثال"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplative/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplative/a",
                "@type": "Node",
                "label": "exemplative",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/exemplative"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ceb/estandard/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ceb/estandard/n",
                "@type": "Node",
                "label": "estandard",
                "language": "ceb",
                "sense_label": "n",
                "term": "/c/ceb/estandard"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/實例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/實例/n",
                "@type": "Node",
                "label": "實例",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/實例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pt/exemplar/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pt/exemplar/n",
                "@type": "Node",
                "label": "exemplar",
                "language": "pt",
                "sense_label": "n",
                "term": "/c/pt/exemplar"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/lt/pavyzdys/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/lt/pavyzdys/n",
                "@type": "Node",
                "label": "pavyzdys",
                "language": "lt",
                "sense_label": "n",
                "term": "/c/lt/pavyzdys"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/exponente/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/exponente/n",
                "@type": "Node",
                "label": "exponente",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/exponente"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ba/өлгө/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ba/өлгө/n",
                "@type": "Node",
                "label": "өлгө",
                "language": "ba",
                "sense_label": "n",
                "term": "/c/ba/өлгө"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fo/dømi/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fo/dømi/n",
                "@type": "Node",
                "label": "dømi",
                "language": "fo",
                "sense_label": "n",
                "term": "/c/fo/dømi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ms/misal/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ms/misal",
                "@type": "Node",
                "label": "misal",
                "language": "ms",
                "term": "/c/ms/misal"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/quintessence/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/quintessence/n",
                "@type": "Node",
                "label": "quintessence",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/quintessence"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/fil/halimbawa/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/fil/halimbawa",
                "@type": "Node",
                "label": "halimbawa",
                "language": "fil",
                "term": "/c/fil/halimbawa"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/de/beispiel/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/de/beispiel",
                "@type": "Node",
                "label": "beispiel",
                "language": "de",
                "term": "/c/de/beispiel"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/效仿/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/效仿/v",
                "@type": "Node",
                "label": "效仿",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/效仿"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/學習/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/學習/v",
                "@type": "Node",
                "label": "學習",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/學習"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/it/esemplare/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/it/esemplare/n",
                "@type": "Node",
                "label": "esemplare",
                "language": "it",
                "sense_label": "n",
                "term": "/c/it/esemplare"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fro/essainple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fro/essainple/n",
                "@type": "Node",
                "label": "essainple",
                "language": "fro",
                "sense_label": "n",
                "term": "/c/fro/essainple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/表率/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/表率/n",
                "@type": "Node",
                "label": "表率",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/表率"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pt/espécime/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pt/espécime/n",
                "@type": "Node",
                "label": "espécime",
                "language": "pt",
                "sense_label": "n",
                "term": "/c/pt/espécime"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/pl/przykład/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/pl/przykład",
                "@type": "Node",
                "label": "przykład",
                "language": "pl",
                "term": "/c/pl/przykład"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ar/امثولة/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ar/امثولة",
                "@type": "Node",
                "label": "امثولة",
                "language": "ar",
                "term": "/c/ar/امثولة"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ro/exemplu/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ro/exemplu/n",
                "@type": "Node",
                "label": "exemplu",
                "language": "ro",
                "sense_label": "n",
                "term": "/c/ro/exemplu"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ia/exemplo/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ia/exemplo",
                "@type": "Node",
                "label": "exemplo",
                "language": "ia",
                "term": "/c/ia/exemplo"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/rhetorical_induction/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/rhetorical_induction/n",
                "@type": "Node",
                "label": "rhetorical induction",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/rhetorical_induction"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/范例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/范例",
                "@type": "Node",
                "label": "范例",
                "language": "zh",
                "term": "/c/zh/范例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sk/príklad/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sk/príklad",
                "@type": "Node",
                "label": "príklad",
                "language": "sk",
                "term": "/c/sk/príklad"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/fr/exemplaire/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/fr/exemplaire",
                "@type": "Node",
                "label": "exemplaire",
                "language": "fr",
                "term": "/c/fr/exemplaire"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/classic/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/classic/n",
                "@type": "Node",
                "label": "classic",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/classic"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/exempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/exempel/n",
                "@type": "Node",
                "label": "exempel",
                "language": "nl",
                "sense_label": "n",
                "term": "/c/nl/exempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/eo/ekzemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/eo/ekzemplo/n",
                "@type": "Node",
                "label": "ekzemplo",
                "language": "eo",
                "sense_label": "n",
                "term": "/c/eo/ekzemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/malliesimerkki/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/malliesimerkki/n",
                "@type": "Node",
                "label": "malliesimerkki",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/malliesimerkki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/樣板/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/樣板/n",
                "@type": "Node",
                "label": "樣板",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/樣板"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/demo/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/demo/n/wikt/en_1",
                "@type": "Node",
                "label": "demo",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/demo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pt/molde/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pt/molde/n",
                "@type": "Node",
                "label": "molde",
                "language": "pt",
                "sense_label": "n",
                "term": "/c/pt/molde"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܚܘܪܐ/n/wikt/en_3/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܚܘܪܐ/n/wikt/en_3",
                "@type": "Node",
                "label": "ܚܘܪܐ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܚܘܪܐ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pa/ਉਦਾਹਰਨ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pa/ਉਦਾਹਰਨ/n",
                "@type": "Node",
                "label": "ਉਦਾਹਰਨ",
                "language": "pa",
                "sense_label": "n",
                "term": "/c/pa/ਉਦਾਹਰਨ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ast/exemplu/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ast/exemplu",
                "@type": "Node",
                "label": "exemplu",
                "language": "ast",
                "term": "/c/ast/exemplu"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/beaut/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/beaut/n",
                "@type": "Node",
                "label": "beaut",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/beaut"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/fa/مثال/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/fa/مثال",
                "@type": "Node",
                "label": "مثال",
                "language": "fa",
                "term": "/c/fa/مثال"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/non/dœmi/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/non/dœmi/n",
                "@type": "Node",
                "label": "dœmi",
                "language": "non",
                "sense_label": "n",
                "term": "/c/non/dœmi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/xcl/տիպ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/xcl/տիպ/n",
                "@type": "Node",
                "label": "տիպ",
                "language": "xcl",
                "sense_label": "n",
                "term": "/c/xcl/տիպ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/じょうれい/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/じょうれい/n",
                "@type": "Node",
                "label": "じょうれい",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/じょうれい"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/はんれい/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/はんれい/n",
                "@type": "Node",
                "label": "はんれい",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/はんれい"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/show_flat/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/show_flat/n",
                "@type": "Node",
                "label": "show flat",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/show_flat"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sa/प्रदेश/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sa/प्रदेश/n",
                "@type": "Node",
                "label": "प्रदेश",
                "language": "sa",
                "sense_label": "n",
                "term": "/c/sa/प्रदेश"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/instantiation/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/instantiation/n",
                "@type": "Node",
                "label": "instantiation",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/instantiation"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/điển/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/điển/n",
                "@type": "Node",
                "label": "điển",
                "language": "vi",
                "sense_label": "n",
                "term": "/c/vi/điển"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/ostentans/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/ostentans",
                "@type": "Node",
                "label": "ostentans",
                "language": "la",
                "term": "/c/la/ostentans"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/ostento/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/ostento/v",
                "@type": "Node",
                "label": "ostento",
                "language": "la",
                "sense_label": "v",
                "term": "/c/la/ostento"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/bal/مثال/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/bal/مثال/n",
                "@type": "Node",
                "label": "مثال",
                "language": "bal",
                "sense_label": "n",
                "term": "/c/bal/مثال"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/上例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/上例/n",
                "@type": "Node",
                "label": "上例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/上例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ja/例/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ja/例",
                "@type": "Node",
                "label": "例",
                "language": "ja",
                "term": "/c/ja/例"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/gd/eisimpleir/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/gd/eisimpleir",
                "@type": "Node",
                "label": "eisimpleir",
                "language": "gd",
                "term": "/c/gd/eisimpleir"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/fr/spécimen/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/fr/spécimen",
                "@type": "Node",
                "label": "spécimen",
                "language": "fr",
                "term": "/c/fr/spécimen"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/he/דגמה/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/he/דגמה",
                "@type": "Node",
                "label": "דגמה",
                "language": "he",
                "term": "/c/he/דגמה"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplificatory/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplificatory/a",
                "@type": "Node",
                "label": "exemplificatory",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/exemplificatory"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/榜樣/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/榜樣/n",
                "@type": "Node",
                "label": "榜樣",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/榜樣"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/舉例/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/舉例/v",
                "@type": "Node",
                "label": "舉例",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/舉例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/excuse/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/excuse/n",
                "@type": "Node",
                "label": "excuse",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/excuse"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ar/قياس/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ar/قياس/n",
                "@type": "Node",
                "label": "قياس",
                "language": "ar",
                "sense_label": "n",
                "term": "/c/ar/قياس"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/it/esempio/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/it/esempio/n",
                "@type": "Node",
                "label": "esempio",
                "language": "it",
                "sense_label": "n",
                "term": "/c/it/esempio"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/เชือดไก่ให้ลิงดู/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/เชือดไก่ให้ลิงดู/v",
                "@type": "Node",
                "label": "เชือดไก่ให้ลิงดู",
                "language": "th",
                "sense_label": "v",
                "term": "/c/th/เชือดไก่ให้ลิงดู"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/cy/enghraifft/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/cy/enghraifft/n",
                "@type": "Node",
                "label": "enghraifft",
                "language": "cy",
                "sense_label": "n",
                "term": "/c/cy/enghraifft"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/egx/bjꜣ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/egx/bjꜣ/n",
                "@type": "Node",
                "label": "bjꜣ",
                "language": "egx",
                "sense_label": "n",
                "term": "/c/egx/bjꜣ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/apotheosis/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/apotheosis/n",
                "@type": "Node",
                "label": "apotheosis",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/apotheosis"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/cu/притъча/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/cu/притъча/n",
                "@type": "Node",
                "label": "притъча",
                "language": "cu",
                "sense_label": "n",
                "term": "/c/cu/притъча"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/比方/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/比方/n",
                "@type": "Node",
                "label": "比方",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/比方"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/standard/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/standard/n",
                "@type": "Node",
                "label": "standard",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/standard"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/เยี่ยง/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/เยี่ยง/n",
                "@type": "Node",
                "label": "เยี่ยง",
                "language": "th",
                "sense_label": "n",
                "term": "/c/th/เยี่ยง"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/v/,/c/en/exemplified/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/exemplified",
                "@type": "Node",
                "label": "exemplified",
                "language": "en",
                "term": "/c/en/exemplified"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/v",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/樣板/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/樣板",
                "@type": "Node",
                "label": "樣板",
                "language": "zh",
                "term": "/c/zh/樣板"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/beauty/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/beauty/n",
                "@type": "Node",
                "label": "beauty",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/beauty"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/exemplaire/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/exemplaire/n",
                "@type": "Node",
                "label": "exemplaire",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/exemplaire"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/punish/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/punish",
                "@type": "Node",
                "label": "punish",
                "language": "en",
                "term": "/c/en/punish"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/crh/örnek/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/crh/örnek/n",
                "@type": "Node",
                "label": "örnek",
                "language": "crh",
                "sense_label": "n",
                "term": "/c/crh/örnek"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/例文/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/例文/n",
                "@type": "Node",
                "label": "例文",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/例文"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/uk/приклад/n/wikt/en_2/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/uk/приклад/n/wikt/en_2",
                "@type": "Node",
                "label": "приклад",
                "language": "uk",
                "sense_label": "n",
                "term": "/c/uk/приклад"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/鑑/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/鑑",
                "@type": "Node",
                "label": "鑑",
                "language": "zh",
                "term": "/c/zh/鑑"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/for_instance/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/for_instance/r",
                "@type": "Node",
                "label": "for instance",
                "language": "en",
                "sense_label": "r",
                "term": "/c/en/for_instance"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܟܪܝܣܝܣ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܟܪܝܣܝܣ/n",
                "@type": "Node",
                "label": "ܟܪܝܣܝܣ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܟܪܝܣܝܣ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/ejemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/ejemplo/n",
                "@type": "Node",
                "label": "ejemplo",
                "language": "es",
                "sense_label": "n",
                "term": "/c/es/ejemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/事例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/事例/n",
                "@type": "Node",
                "label": "事例",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/事例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sk/príklad/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sk/príklad/n",
                "@type": "Node",
                "label": "príklad",
                "language": "sk",
                "sense_label": "n",
                "term": "/c/sk/príklad"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/arc/מחזיתא/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/arc/מחזיתא/n",
                "@type": "Node",
                "label": "מחזיתא",
                "language": "arc",
                "sense_label": "n",
                "term": "/c/arc/מחזיתא"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pt/exemplo/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pt/exemplo/n",
                "@type": "Node",
                "label": "exemplo",
                "language": "pt",
                "sense_label": "n",
                "term": "/c/pt/exemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/exemplar/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/exemplar",
                "@type": "Node",
                "label": "exemplar",
                "language": "en",
                "term": "/c/en/exemplar"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/样例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/样例",
                "@type": "Node",
                "label": "样例",
                "language": "zh",
                "term": "/c/zh/样例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/fi/esimerkki/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/fi/esimerkki",
                "@type": "Node",
                "label": "esimerkki",
                "language": "fi",
                "term": "/c/fi/esimerkki"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/FormOf/,/c/en/exampling/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/FormOf",
                "@type": "Relation",
                "label": "FormOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exampling/v",
                "@type": "Node",
                "label": "exampling",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/exampling"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/範例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/範例/n",
                "@type": "Node",
                "label": "範例",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/範例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/exercise/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/exercise",
                "@type": "Node",
                "label": "exercise",
                "language": "en",
                "term": "/c/en/exercise"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/vi/ví_dụ/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/vi/ví_dụ",
                "@type": "Node",
                "label": "ví dụ",
                "language": "vi",
                "term": "/c/vi/ví_dụ"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/instance/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/instance/n",
                "@type": "Node",
                "label": "instance",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/instance"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ru/равняться/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ru/равняться/v",
                "@type": "Node",
                "label": "равняться",
                "language": "ru",
                "sense_label": "v",
                "term": "/c/ru/равняться"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/id/contoh/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/id/contoh/n",
                "@type": "Node",
                "label": "contoh",
                "language": "id",
                "sense_label": "n",
                "term": "/c/id/contoh"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/例證/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/例證",
                "@type": "Node",
                "label": "例證",
                "language": "zh",
                "term": "/c/zh/例證"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/fr/exemple/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/fr/exemple",
                "@type": "Node",
                "label": "exemple",
                "language": "fr",
                "term": "/c/fr/exemple"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sl/primer/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sl/primer/n",
                "@type": "Node",
                "label": "primer",
                "language": "sl",
                "sense_label": "n",
                "term": "/c/sl/primer"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/de/lesebeispiel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/lesebeispiel/n",
                "@type": "Node",
                "label": "lesebeispiel",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/lesebeispiel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplar/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplar/n/wikt/en_1",
                "@type": "Node",
                "label": "exemplar",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/exemplar"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sv/beläggexempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sv/beläggexempel/n",
                "@type": "Node",
                "label": "beläggexempel",
                "language": "sv",
                "sense_label": "n",
                "term": "/c/sv/beläggexempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/レイ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/レイ/n",
                "@type": "Node",
                "label": "レイ",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/レイ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplum/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplum/n",
                "@type": "Node",
                "label": "exemplum",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/exemplum"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/wym/bajśpil/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/wym/bajśpil/n",
                "@type": "Node",
                "label": "bajśpil",
                "language": "wym",
                "sense_label": "n",
                "term": "/c/wym/bajśpil"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplificative/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplificative/a",
                "@type": "Node",
                "label": "exemplificative",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/exemplificative"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/zh/例子/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/zh/例子",
                "@type": "Node",
                "label": "例子",
                "language": "zh",
                "term": "/c/zh/例子"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ht/egzanp/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ht/egzanp/n",
                "@type": "Node",
                "label": "egzanp",
                "language": "ht",
                "sense_label": "n",
                "term": "/c/ht/egzanp"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/forbisen/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/forbisen/n",
                "@type": "Node",
                "label": "forbisen",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/forbisen"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/concretize/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/concretize/v",
                "@type": "Node",
                "label": "concretize",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/concretize"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/par_excellence/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/par_excellence/a",
                "@type": "Node",
                "label": "par excellence",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/par_excellence"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ang/bispell/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ang/bispell/n",
                "@type": "Node",
                "label": "bispell",
                "language": "ang",
                "sense_label": "n",
                "term": "/c/ang/bispell"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/got/𐍆𐍂𐌹𐍃𐌰𐌷𐍄𐍃/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/got/𐍆𐍂𐌹𐍃𐌰𐌷𐍄𐍃/n",
                "@type": "Node",
                "label": "𐍆𐍂𐌹𐍃𐌰𐌷𐍄𐍃",
                "language": "got",
                "sense_label": "n",
                "term": "/c/got/𐍆𐍂𐌹𐍃𐌰𐌷𐍄𐍃"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/qu/wanay/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/qu/wanay/n",
                "@type": "Node",
                "label": "wanay",
                "language": "qu",
                "sense_label": "n",
                "term": "/c/qu/wanay"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/xcl/առակ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/xcl/առակ/n",
                "@type": "Node",
                "label": "առակ",
                "language": "xcl",
                "sense_label": "n",
                "term": "/c/xcl/առակ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/bal/مثال/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/bal/مثال",
                "@type": "Node",
                "label": "مثال",
                "language": "bal",
                "term": "/c/bal/مثال"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/urtext/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/urtext/n",
                "@type": "Node",
                "label": "urtext",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/urtext"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/例題/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/例題/n",
                "@type": "Node",
                "label": "例題",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/例題"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/example/n/wp/musician/,/http://dbpedia.org/resource/Example_(musician)/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "http://dbpedia.org/resource/Example_(musician)",
                "@type": "Node",
                "label": "Example (musician)",
                "path": "/resource/Example_(musician)",
                "site": "dbpedia.org",
                "site_available": true,
                "term": "http://dbpedia.org/resource/Example_(musician)"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wp/musician",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, musician",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/no/eksemplar/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/no/eksemplar/n",
                "@type": "Node",
                "label": "eksemplar",
                "language": "no",
                "sense_label": "n",
                "term": "/c/no/eksemplar"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/is/dæmi/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/is/dæmi/n",
                "@type": "Node",
                "label": "dæmi",
                "language": "is",
                "sense_label": "n",
                "term": "/c/is/dæmi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ca/exemple/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ca/exemple",
                "@type": "Node",
                "label": "exemple",
                "language": "ca",
                "term": "/c/ca/exemple"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/典范/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/典范",
                "@type": "Node",
                "label": "典范",
                "language": "zh",
                "term": "/c/zh/典范"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/example/n/wp/musician/,/http://wikidata.dbpedia.org/resource/Q352098/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "http://wikidata.dbpedia.org/resource/Q352098",
                "@type": "Node",
                "label": "Q352098",
                "path": "/resource/Q352098",
                "site": "wikidata.dbpedia.org",
                "site_available": false,
                "term": "http://wikidata.dbpedia.org/resource/Q352098"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wp/musician",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, musician",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ar/نموذج/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ar/نموذج/n",
                "@type": "Node",
                "label": "نموذج",
                "language": "ar",
                "sense_label": "n",
                "term": "/c/ar/نموذج"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/手本/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/手本/n",
                "@type": "Node",
                "label": "手本",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/手本"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ceb/model/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ceb/model/n/wikt/en_1",
                "@type": "Node",
                "label": "model",
                "language": "ceb",
                "sense_label": "n",
                "term": "/c/ceb/model"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/事例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/事例/n",
                "@type": "Node",
                "label": "事例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/事例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sv/exempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sv/exempel/n",
                "@type": "Node",
                "label": "exempel",
                "language": "sv",
                "sense_label": "n",
                "term": "/c/sv/exempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/model/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/model/n",
                "@type": "Node",
                "label": "model",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/model"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/例句/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/例句/n",
                "@type": "Node",
                "label": "例句",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/例句"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ro/conta/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ro/conta/v",
                "@type": "Node",
                "label": "conta",
                "language": "ro",
                "sense_label": "v",
                "term": "/c/ro/conta"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/de/exempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/exempel/n",
                "@type": "Node",
                "label": "exempel",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/exempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ms/umpama/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ms/umpama/n",
                "@type": "Node",
                "label": "umpama",
                "language": "ms",
                "sense_label": "n",
                "term": "/c/ms/umpama"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vec/exenpio/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vec/exenpio/n",
                "@type": "Node",
                "label": "exenpio",
                "language": "vec",
                "sense_label": "n",
                "term": "/c/vec/exenpio"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/exemplaris/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/exemplaris/a",
                "@type": "Node",
                "label": "exemplaris",
                "language": "la",
                "sense_label": "a",
                "term": "/c/la/exemplaris"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hil/pananglitan/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hil/pananglitan/n",
                "@type": "Node",
                "label": "pananglitan",
                "language": "hil",
                "sense_label": "n",
                "term": "/c/hil/pananglitan"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/be/прыклад/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/be/прыклад/n/wikt/en_1",
                "@type": "Node",
                "label": "прыклад",
                "language": "be",
                "sense_label": "n",
                "term": "/c/be/прыклад"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/es/ejemplo/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/es/ejemplo",
                "@type": "Node",
                "label": "ejemplo",
                "language": "es",
                "term": "/c/es/ejemplo"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/application/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/application",
                "@type": "Node",
                "label": "application",
                "language": "en",
                "term": "/c/en/application"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/warning/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/warning",
                "@type": "Node",
                "label": "warning",
                "language": "en",
                "term": "/c/en/warning"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/學好/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/學好/v",
                "@type": "Node",
                "label": "學好",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/學好"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/th/ตัวอย่าง/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/th/ตัวอย่าง",
                "@type": "Node",
                "label": "ตัวอย่าง",
                "language": "th",
                "term": "/c/th/ตัวอย่าง"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/比如/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/比如/v",
                "@type": "Node",
                "label": "比如",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/比如"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/帶頭/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/帶頭/v",
                "@type": "Node",
                "label": "帶頭",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/帶頭"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sv/exempel/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sv/exempel",
                "@type": "Node",
                "label": "exempel",
                "language": "sv",
                "term": "/c/sv/exempel"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/zh/榜樣/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/zh/榜樣",
                "@type": "Node",
                "label": "榜樣",
                "language": "zh",
                "term": "/c/zh/榜樣"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mr/नमुना/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mr/नमुना/n",
                "@type": "Node",
                "label": "नमुना",
                "language": "mr",
                "sense_label": "n",
                "term": "/c/mr/नमुना"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/hu/példány/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/hu/példány",
                "@type": "Node",
                "label": "példány",
                "language": "hu",
                "term": "/c/hu/példány"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/de/ein_exempel_statuieren/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/ein_exempel_statuieren/v",
                "@type": "Node",
                "label": "ein exempel statuieren",
                "language": "de",
                "sense_label": "v",
                "term": "/c/de/ein_exempel_statuieren"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/id/misal/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/id/misal/n",
                "@type": "Node",
                "label": "misal",
                "language": "id",
                "sense_label": "n",
                "term": "/c/id/misal"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/見本/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/見本/n",
                "@type": "Node",
                "label": "見本",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/見本"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/身教/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/身教/v",
                "@type": "Node",
                "label": "身教",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/身教"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/f'rinstance/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/f'rinstance/n",
                "@type": "Node",
                "label": "f'rinstance",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/f'rinstance"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/grc/παραδείκνυμι/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/grc/παραδείκνυμι/v",
                "@type": "Node",
                "label": "παραδείκνυμι",
                "language": "grc",
                "sense_label": "v",
                "term": "/c/grc/παραδείκνυμι"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/標兵/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/標兵",
                "@type": "Node",
                "label": "標兵",
                "language": "zh",
                "term": "/c/zh/標兵"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ko/예/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ko/예",
                "@type": "Node",
                "label": "예",
                "language": "ko",
                "term": "/c/ko/예"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/paradigm/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/paradigm/n",
                "@type": "Node",
                "label": "paradigm",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/paradigm"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/FormOf/,/c/en/examples/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/FormOf",
                "@type": "Relation",
                "label": "FormOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/examples/v",
                "@type": "Node",
                "label": "examples",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/examples"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ka/მაგალითი/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ka/მაგალითი",
                "@type": "Node",
                "label": "მაგალითი",
                "language": "ka",
                "term": "/c/ka/მაგალითი"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/go_to_show/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/go_to_show/v",
                "@type": "Node",
                "label": "go to show",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/go_to_show"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/看齊/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/看齊/v",
                "@type": "Node",
                "label": "看齊",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/看齊"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/EtymologicallyDerivedFrom/,/c/eo/ekzemplo/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyDerivedFrom",
                "@type": "Relation",
                "label": "EtymologicallyDerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/eo/ekzemplo",
                "@type": "Node",
                "label": "ekzemplo",
                "language": "eo",
                "term": "/c/eo/ekzemplo"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/yi/משל/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/yi/משל/n",
                "@type": "Node",
                "label": "משל",
                "language": "yi",
                "sense_label": "n",
                "term": "/c/yi/משל"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ka/მაგალითი/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ka/მაგალითი/n",
                "@type": "Node",
                "label": "მაგალითი",
                "language": "ka",
                "sense_label": "n",
                "term": "/c/ka/მაგალითი"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/sample/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/sample/n",
                "@type": "Node",
                "label": "sample",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/sample"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/tachygraph/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/tachygraph/n",
                "@type": "Node",
                "label": "tachygraph",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/tachygraph"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/실례/n/wikt/en_2/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/실례/n/wikt/en_2",
                "@type": "Node",
                "label": "실례",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/실례"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/例/n",
                "@type": "Node",
                "label": "例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/toonbeeld/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/toonbeeld/n",
                "@type": "Node",
                "label": "toonbeeld",
                "language": "nl",
                "sense_label": "n",
                "term": "/c/nl/toonbeeld"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fo/dømi/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/de",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/de/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/de",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fo/dømi/n",
                "@type": "Node",
                "label": "dømi",
                "language": "fo",
                "sense_label": "n",
                "term": "/c/fo/dømi"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/kbd/щапхъэ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/kbd/щапхъэ/n",
                "@type": "Node",
                "label": "щапхъэ",
                "language": "kbd",
                "sense_label": "n",
                "term": "/c/kbd/щапхъэ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/e.g/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/e.g/r",
                "@type": "Node",
                "label": "e.g",
                "language": "en",
                "sense_label": "r",
                "term": "/c/en/e.g"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/表率/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/表率",
                "@type": "Node",
                "label": "表率",
                "language": "zh",
                "term": "/c/zh/表率"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/代表/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/代表/n",
                "@type": "Node",
                "label": "代表",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/代表"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/好樣的/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/好樣的/n",
                "@type": "Node",
                "label": "好樣的",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/好樣的"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ku/mînak/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ku/mînak/n",
                "@type": "Node",
                "label": "mînak",
                "language": "ku",
                "sense_label": "n",
                "term": "/c/ku/mînak"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/ExternalURL/,/c/en/example/n/wn/communication/,/http://wordnet-rdf.princeton.edu/wn31/106685497-n/]",
            "@type": "Edge",
            "dataset": "/d/wordnet/3.1",
            "end": {
                "@id": "http://wordnet-rdf.princeton.edu/wn31/106685497-n",
                "@type": "Node",
                "label": "106685497-n",
                "path": "/wn31/106685497-n",
                "site": "wordnet-rdf.princeton.edu",
                "site_available": true,
                "term": "http://wordnet-rdf.princeton.edu/wn31/106685497-n"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/ExternalURL",
                "@type": "Relation",
                "label": "ExternalURL"
            },
            "sources": [
                {
                    "@id": "/s/resource/wordnet/rdf/3.1",
                    "@type": "Source",
                    "contributor": "/s/resource/wordnet/rdf/3.1"
                }
            ],
            "start": {
                "@id": "/c/en/example/n/wn/communication",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, communication",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/consider/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/consider/v",
                "@type": "Node",
                "label": "consider",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/consider"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/FormOf/,/c/en/examples/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/FormOf",
                "@type": "Relation",
                "label": "FormOf"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/examples/n",
                "@type": "Node",
                "label": "examples",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/examples"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hi/नमूना/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hi/नमूना/n",
                "@type": "Node",
                "label": "नमूना",
                "language": "hi",
                "sense_label": "n",
                "term": "/c/hi/नमूना"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sw/mifano/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sw/mifano",
                "@type": "Node",
                "label": "mifano",
                "language": "sw",
                "term": "/c/sw/mifano"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/v.g/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/v.g/r",
                "@type": "Node",
                "label": "v.g",
                "language": "en",
                "sense_label": "r",
                "term": "/c/en/v.g"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/my/နမူနာ/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/my/နမူနာ",
                "@type": "Node",
                "label": "နမူနာ",
                "language": "my",
                "term": "/c/my/နမူနာ"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/gl/exemplo/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/gl/exemplo",
                "@type": "Node",
                "label": "exemplo",
                "language": "gl",
                "term": "/c/gl/exemplo"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/foreleader/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/foreleader/n",
                "@type": "Node",
                "label": "foreleader",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/foreleader"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/たとえ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/たとえ/n",
                "@type": "Node",
                "label": "たとえ",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/たとえ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/follow_suit/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/follow_suit/v",
                "@type": "Node",
                "label": "follow suit",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/follow_suit"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ga/sampla/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ga/sampla/n",
                "@type": "Node",
                "label": "sampla",
                "language": "ga",
                "sense_label": "n",
                "term": "/c/ga/sampla"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/but/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/but/n",
                "@type": "Node",
                "label": "but",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/but"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/exempli_gratia/r/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/exempli_gratia/r",
                "@type": "Node",
                "label": "exempli gratia",
                "language": "la",
                "sense_label": "r",
                "term": "/c/la/exempli_gratia"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/hero/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/hero/n",
                "@type": "Node",
                "label": "hero",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/hero"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/轍/n/wikt/en_2/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/轍/n/wikt/en_2",
                "@type": "Node",
                "label": "轍",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/轍"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/exemple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/exemple/n",
                "@type": "Node",
                "label": "exemple",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/exemple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/v/,/c/en/illustrated/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/illustrated",
                "@type": "Node",
                "label": "illustrated",
                "language": "en",
                "term": "/c/en/illustrated"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/v",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/no/døme/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/no/døme",
                "@type": "Node",
                "label": "døme",
                "language": "no",
                "term": "/c/no/døme"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/教科書式/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/教科書式/a",
                "@type": "Node",
                "label": "教科書式",
                "language": "zh",
                "sense_label": "a",
                "term": "/c/zh/教科書式"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/imitate/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/imitate",
                "@type": "Node",
                "label": "imitate",
                "language": "en",
                "term": "/c/en/imitate"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/ensample/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/ensample/n",
                "@type": "Node",
                "label": "ensample",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/ensample"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/paradigm/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/paradigm/n",
                "@type": "Node",
                "label": "paradigm",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/paradigm"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/af/patroon/n/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/af/patroon/n/wikt/en_1",
                "@type": "Node",
                "label": "patroon",
                "language": "af",
                "sense_label": "n",
                "term": "/c/af/patroon"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/eo/ekzemplo/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/eo/ekzemplo",
                "@type": "Node",
                "label": "ekzemplo",
                "language": "eo",
                "term": "/c/eo/ekzemplo"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/yi/בײשפיל/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/yi/בײשפיל",
                "@type": "Node",
                "label": "בײשפיל",
                "language": "yi",
                "term": "/c/yi/בײשפיל"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ku/نمونه‌/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ku/نمونه‌",
                "@type": "Node",
                "label": "نمونه‌",
                "language": "ku",
                "term": "/c/ku/نمونه‌"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/exemplum/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/exemplum/n",
                "@type": "Node",
                "label": "exemplum",
                "language": "la",
                "sense_label": "n",
                "term": "/c/la/exemplum"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/示範/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/示範/v",
                "@type": "Node",
                "label": "示範",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/示範"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/例證/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/例證/n",
                "@type": "Node",
                "label": "例證",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/例證"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/ตัวอย่าง/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/ตัวอย่าง/n",
                "@type": "Node",
                "label": "ตัวอย่าง",
                "language": "th",
                "sense_label": "n",
                "term": "/c/th/ตัวอย่าง"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sa/उदाहरण/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sa/उदाहरण/n",
                "@type": "Node",
                "label": "उदाहरण",
                "language": "sa",
                "sense_label": "n",
                "term": "/c/sa/उदाहरण"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fr/donner_l_exemple/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/donner_l_exemple/v",
                "@type": "Node",
                "label": "donner l exemple",
                "language": "fr",
                "sense_label": "v",
                "term": "/c/fr/donner_l_exemple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/ví_dụ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/ví_dụ/n",
                "@type": "Node",
                "label": "ví dụ",
                "language": "vi",
                "sense_label": "n",
                "term": "/c/vi/ví_dụ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/persequor/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/persequor/v",
                "@type": "Node",
                "label": "persequor",
                "language": "la",
                "sense_label": "v",
                "term": "/c/la/persequor"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/is/dæmi/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/is/dæmi",
                "@type": "Node",
                "label": "dæmi",
                "language": "is",
                "term": "/c/is/dæmi"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/EtymologicallyDerivedFrom/,/c/en/example/,/c/fro/essample/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/fro/essample",
                "@type": "Node",
                "label": "essample",
                "language": "fro",
                "term": "/c/fro/essample"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/EtymologicallyDerivedFrom",
                "@type": "Relation",
                "label": "EtymologicallyDerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sl/primer/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sl/primer",
                "@type": "Node",
                "label": "primer",
                "language": "sl",
                "term": "/c/sl/primer"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/伊周/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/伊周/n",
                "@type": "Node",
                "label": "伊周",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/伊周"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/arc/טופסא/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/arc/טופסא/n",
                "@type": "Node",
                "label": "טופסא",
                "language": "arc",
                "sense_label": "n",
                "term": "/c/arc/טופסא"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/사례/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/사례/n",
                "@type": "Node",
                "label": "사례",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/사례"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/hil/halimbawa/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/hil/halimbawa/n",
                "@type": "Node",
                "label": "halimbawa",
                "language": "hil",
                "sense_label": "n",
                "term": "/c/hil/halimbawa"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/鉴/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/鉴",
                "@type": "Node",
                "label": "鉴",
                "language": "zh",
                "term": "/c/zh/鉴"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ang/bysen/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ang/bysen",
                "@type": "Node",
                "label": "bysen",
                "language": "ang",
                "term": "/c/ang/bysen"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/じれい/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/じれい/n",
                "@type": "Node",
                "label": "じれい",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/じれい"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/sq/shembull/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/sq/shembull",
                "@type": "Node",
                "label": "shembull",
                "language": "sq",
                "term": "/c/sq/shembull"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mg/lamy/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mg/lamy/n",
                "@type": "Node",
                "label": "lamy",
                "language": "mg",
                "sense_label": "n",
                "term": "/c/mg/lamy"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/vagueness/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/vagueness/n",
                "@type": "Node",
                "label": "vagueness",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/vagueness"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mk/се_огледа/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mk/се_огледа/v",
                "@type": "Node",
                "label": "се огледа",
                "language": "mk",
                "sense_label": "v",
                "term": "/c/mk/се_огледа"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/count/v/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/count/v/wikt/en_1",
                "@type": "Node",
                "label": "count",
                "language": "en",
                "sense_label": "v",
                "term": "/c/en/count"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/tr/örnek/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/tr/örnek",
                "@type": "Node",
                "label": "örnek",
                "language": "tr",
                "term": "/c/tr/örnek"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/典範/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/典範/n",
                "@type": "Node",
                "label": "典範",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/典範"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/tk/mysal/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/tk/mysal/n",
                "@type": "Node",
                "label": "mysal",
                "language": "tk",
                "sense_label": "n",
                "term": "/c/tk/mysal"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ga/sampla/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ga/sampla",
                "@type": "Node",
                "label": "sampla",
                "language": "ga",
                "term": "/c/ga/sampla"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/id/berumpama/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/id/berumpama/v",
                "@type": "Node",
                "label": "berumpama",
                "language": "id",
                "sense_label": "v",
                "term": "/c/id/berumpama"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/DerivedFrom/,/c/en/counterexample/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/DerivedFrom",
                "@type": "Relation",
                "label": "DerivedFrom"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/counterexample",
                "@type": "Node",
                "label": "counterexample",
                "language": "en",
                "term": "/c/en/counterexample"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ast/exemplu/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ast/exemplu/n",
                "@type": "Node",
                "label": "exemplu",
                "language": "ast",
                "sense_label": "n",
                "term": "/c/ast/exemplu"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/unexampled/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/unexampled/a",
                "@type": "Node",
                "label": "unexampled",
                "language": "en",
                "sense_label": "a",
                "term": "/c/en/unexampled"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/epagoge/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/epagoge/n",
                "@type": "Node",
                "label": "epagoge",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/epagoge"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ota/نمونه/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ota/نمونه/n",
                "@type": "Node",
                "label": "نمونه",
                "language": "ota",
                "sense_label": "n",
                "term": "/c/ota/نمونه"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/one_of_kind/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/one_of_kind/n",
                "@type": "Node",
                "label": "one of kind",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/one_of_kind"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/you_name_it/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/you_name_it/n",
                "@type": "Node",
                "label": "you name it",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/you_name_it"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mk/се_огледува/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mk/се_огледува/v",
                "@type": "Node",
                "label": "се огледува",
                "language": "mk",
                "sense_label": "v",
                "term": "/c/mk/се_огледува"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pl/przykład/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pl/przykład/n",
                "@type": "Node",
                "label": "przykład",
                "language": "pl",
                "sense_label": "n",
                "term": "/c/pl/przykład"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/th/อาทิ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/th/อาทิ/n",
                "@type": "Node",
                "label": "อาทิ",
                "language": "th",
                "sense_label": "n",
                "term": "/c/th/อาทิ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/as/r/wikt/en_1/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/as/r/wikt/en_1",
                "@type": "Node",
                "label": "as",
                "language": "en",
                "sense_label": "r",
                "term": "/c/en/as"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/syc/ܛܘܦܣܐ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/syc/ܛܘܦܣܐ/n",
                "@type": "Node",
                "label": "ܛܘܦܣܐ",
                "language": "syc",
                "sense_label": "n",
                "term": "/c/syc/ܛܘܦܣܐ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/样板/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/样板",
                "@type": "Node",
                "label": "样板",
                "language": "zh",
                "term": "/c/zh/样板"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/実施例/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/実施例/n",
                "@type": "Node",
                "label": "実施例",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/実施例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/de/exempel/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/de/exempel",
                "@type": "Node",
                "label": "exempel",
                "language": "de",
                "term": "/c/de/exempel"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/外傳/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/外傳/n",
                "@type": "Node",
                "label": "外傳",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/外傳"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ru/иллюстрация/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ru/иллюстрация/n",
                "@type": "Node",
                "label": "иллюстрация",
                "language": "ru",
                "sense_label": "n",
                "term": "/c/ru/иллюстрация"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/範例/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/範例",
                "@type": "Node",
                "label": "範例",
                "language": "zh",
                "term": "/c/zh/範例"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/gd/rabhadh/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/gd/rabhadh/n",
                "@type": "Node",
                "label": "rabhadh",
                "language": "gd",
                "sense_label": "n",
                "term": "/c/gd/rabhadh"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/gd/eisimpleir/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/gd/eisimpleir/n",
                "@type": "Node",
                "label": "eisimpleir",
                "language": "gd",
                "sense_label": "n",
                "term": "/c/gd/eisimpleir"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exhibit/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exhibit/n",
                "@type": "Node",
                "label": "exhibit",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/exhibit"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/vi/ví_dụ/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/vi/ví_dụ/v",
                "@type": "Node",
                "label": "ví dụ",
                "language": "vi",
                "sense_label": "v",
                "term": "/c/vi/ví_dụ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/zh/例子/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/cc_cedict",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/cc_cedict/2017-10",
                    "@type": "Source",
                    "contributor": "/s/resource/cc_cedict/2017-10"
                }
            ],
            "start": {
                "@id": "/c/zh/例子",
                "@type": "Node",
                "label": "例子",
                "language": "zh",
                "term": "/c/zh/例子"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nl/voorbeeldig/a/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nl/voorbeeldig/a",
                "@type": "Node",
                "label": "voorbeeldig",
                "language": "nl",
                "sense_label": "a",
                "term": "/c/nl/voorbeeldig"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/id/umpama/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/id/umpama/n",
                "@type": "Node",
                "label": "umpama",
                "language": "id",
                "sense_label": "n",
                "term": "/c/id/umpama"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/tr/örnek/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/tr/örnek/n",
                "@type": "Node",
                "label": "örnek",
                "language": "tr",
                "sense_label": "n",
                "term": "/c/tr/örnek"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/follower/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/follower/n",
                "@type": "Node",
                "label": "follower",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/follower"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ro/pildă/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ro/pildă/n",
                "@type": "Node",
                "label": "pildă",
                "language": "ro",
                "sense_label": "n",
                "term": "/c/ro/pildă"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/heterarchy/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/heterarchy/n",
                "@type": "Node",
                "label": "heterarchy",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/heterarchy"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/la/exemplum/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/la/exemplum",
                "@type": "Node",
                "label": "exemplum",
                "language": "la",
                "term": "/c/la/exemplum"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/bad/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/bad",
                "@type": "Node",
                "label": "bad",
                "language": "en",
                "term": "/c/en/bad"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ar/اعتبر/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ar/اعتبر/v",
                "@type": "Node",
                "label": "اعتبر",
                "language": "ar",
                "sense_label": "v",
                "term": "/c/ar/اعتبر"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ar/مثال/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ar/مثال/n",
                "@type": "Node",
                "label": "مثال",
                "language": "ar",
                "sense_label": "n",
                "term": "/c/ar/مثال"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ady/щысэ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ady/щысэ/n",
                "@type": "Node",
                "label": "щысэ",
                "language": "ady",
                "sense_label": "n",
                "term": "/c/ady/щысэ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/bn/উদাহরণ/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/bn/উদাহরণ/n",
                "@type": "Node",
                "label": "উদাহরণ",
                "language": "bn",
                "sense_label": "n",
                "term": "/c/bn/উদাহরণ"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ang/biliþe/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ang/biliþe/n",
                "@type": "Node",
                "label": "biliþe",
                "language": "ang",
                "sense_label": "n",
                "term": "/c/ang/biliþe"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/el/παραδειγμα/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/el/παραδειγμα",
                "@type": "Node",
                "label": "παραδειγμα",
                "language": "el",
                "term": "/c/el/παραδειγμα"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/mt/eżempju/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/mt/eżempju/n",
                "@type": "Node",
                "label": "eżempju",
                "language": "mt",
                "sense_label": "n",
                "term": "/c/mt/eżempju"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/fr/échantillon/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/fr",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/fr/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/fr",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fr/échantillon/n",
                "@type": "Node",
                "label": "échantillon",
                "language": "fr",
                "sense_label": "n",
                "term": "/c/fr/échantillon"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ne/उदाहरण/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ne/उदाहरण/n",
                "@type": "Node",
                "label": "उदाहरण",
                "language": "ne",
                "sense_label": "n",
                "term": "/c/ne/उदाहरण"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/malli/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/malli/n",
                "@type": "Node",
                "label": "malli",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/malli"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/picture/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/picture/n",
                "@type": "Node",
                "label": "picture",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/picture"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/pro/eysemple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/pro/eysemple/n",
                "@type": "Node",
                "label": "eysemple",
                "language": "pro",
                "sense_label": "n",
                "term": "/c/pro/eysemple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/數落/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/數落/v",
                "@type": "Node",
                "label": "數落",
                "language": "zh",
                "sense_label": "v",
                "term": "/c/zh/數落"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fa/مثال/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fa/مثال/n",
                "@type": "Node",
                "label": "مثال",
                "language": "fa",
                "sense_label": "n",
                "term": "/c/fa/مثال"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zza/orneg/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zza/orneg/n",
                "@type": "Node",
                "label": "orneg",
                "language": "zza",
                "sense_label": "n",
                "term": "/c/zza/orneg"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/cs/příklad/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/cs/příklad",
                "@type": "Node",
                "label": "příklad",
                "language": "cs",
                "term": "/c/cs/příklad"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ar/مثل/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ar/مثل",
                "@type": "Node",
                "label": "مثل",
                "language": "ar",
                "term": "/c/ar/مثل"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/la/exemplar/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/la/exemplar/n",
                "@type": "Node",
                "label": "exemplar",
                "language": "la",
                "sense_label": "n",
                "term": "/c/la/exemplar"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/fi/esimerkki/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/fi/esimerkki/n",
                "@type": "Node",
                "label": "esimerkki",
                "language": "fi",
                "sense_label": "n",
                "term": "/c/fi/esimerkki"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/n/,/c/en/quotation/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/quotation",
                "@type": "Node",
                "label": "quotation",
                "language": "en",
                "term": "/c/en/quotation"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/es/ejemplificar/v/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/es/ejemplificar/v",
                "@type": "Node",
                "label": "ejemplificar",
                "language": "es",
                "sense_label": "v",
                "term": "/c/es/ejemplificar"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/enm/forbus/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/enm/forbus/n",
                "@type": "Node",
                "label": "forbus",
                "language": "enm",
                "sense_label": "n",
                "term": "/c/enm/forbus"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/ro/exemplu/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/ro/exemplu",
                "@type": "Node",
                "label": "exemplu",
                "language": "ro",
                "term": "/c/ro/exemplu"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ota/اورنك/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ota/اورنك/n",
                "@type": "Node",
                "label": "اورنك",
                "language": "ota",
                "sense_label": "n",
                "term": "/c/ota/اورنك"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/da/taleksempel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/da/taleksempel/n",
                "@type": "Node",
                "label": "taleksempel",
                "language": "da",
                "sense_label": "n",
                "term": "/c/da/taleksempel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/myv/невтематешкс/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/myv/невтематешкс",
                "@type": "Node",
                "label": "невтематешкс",
                "language": "myv",
                "term": "/c/myv/невтематешкс"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/br/skouer/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/br/skouer/n",
                "@type": "Node",
                "label": "skouer",
                "language": "br",
                "sense_label": "n",
                "term": "/c/br/skouer"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sq/shembull/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sq/shembull/n",
                "@type": "Node",
                "label": "shembull",
                "language": "sq",
                "sense_label": "n",
                "term": "/c/sq/shembull"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/Synonym/,/c/en/example/n/,/c/id/misal/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/id/misal",
                "@type": "Node",
                "label": "misal",
                "language": "id",
                "term": "/c/id/misal"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/example/n",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/example"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ang/forebisen/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ang/forebisen/n",
                "@type": "Node",
                "label": "forebisen",
                "language": "ang",
                "sense_label": "n",
                "term": "/c/ang/forebisen"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/pipe_opener/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/pipe_opener/n",
                "@type": "Node",
                "label": "pipe opener",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/pipe_opener"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/견본/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/견본/n",
                "@type": "Node",
                "label": "견본",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/견본"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/sco/ensaumple/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/sco/ensaumple/n",
                "@type": "Node",
                "label": "ensaumple",
                "language": "sco",
                "sense_label": "n",
                "term": "/c/sco/ensaumple"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/de/beispiel/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/de/beispiel/n",
                "@type": "Node",
                "label": "beispiel",
                "language": "de",
                "sense_label": "n",
                "term": "/c/de/beispiel"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ja/れい/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ja/れい/n",
                "@type": "Node",
                "label": "れい",
                "language": "ja",
                "sense_label": "n",
                "term": "/c/ja/れい"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/nci/machiyotl/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/nci/machiyotl/n",
                "@type": "Node",
                "label": "machiyotl",
                "language": "nci",
                "sense_label": "n",
                "term": "/c/nci/machiyotl"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/lzz/ორნეღი/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/lzz/ორნეღი/n",
                "@type": "Node",
                "label": "ორნეღი",
                "language": "lzz",
                "sense_label": "n",
                "term": "/c/lzz/ორნეღი"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/ko/예문/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/ko/예문/n",
                "@type": "Node",
                "label": "예문",
                "language": "ko",
                "sense_label": "n",
                "term": "/c/ko/예문"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/exemplary/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/en/exemplary/n",
                "@type": "Node",
                "label": "exemplary",
                "language": "en",
                "sense_label": "n",
                "term": "/c/en/exemplary"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/zh/標兵/n/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/wiktionary/en",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/wikiparsec/2/,/s/resource/wiktionary/en/]",
                    "@type": "Source",
                    "contributor": "/s/resource/wiktionary/en",
                    "process": "/s/process/wikiparsec/2"
                }
            ],
            "start": {
                "@id": "/c/zh/標兵/n",
                "@type": "Node",
                "label": "標兵",
                "language": "zh",
                "sense_label": "n",
                "term": "/c/zh/標兵"
            },
            "surfaceText": null,
            "weight": 1.0
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/example/,/c/en/instance/]",
            "@type": "Edge",
            "dataset": "/d/verbosity",
            "end": {
                "@id": "/c/en/instance",
                "@type": "Node",
                "label": "instance",
                "language": "en",
                "term": "/c/en/instance"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/split_words/,/s/resource/verbosity/]",
                    "@type": "Source",
                    "contributor": "/s/resource/verbosity",
                    "process": "/s/process/split_words"
                },
                {
                    "@id": "/s/resource/verbosity",
                    "@type": "Source",
                    "contributor": "/s/resource/verbosity"
                }
            ],
            "start": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "surfaceText": "[[example]] is related to [[instance]]",
            "weight": 0.8820000000000001
        },
        {
            "@id": "/a/[/r/RelatedTo/,/c/en/metal/,/c/en/example/]",
            "@type": "Edge",
            "dataset": "/d/verbosity",
            "end": {
                "@id": "/c/en/example",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "term": "/c/en/example"
            },
            "license": "cc:by/4.0",
            "rel": {
                "@id": "/r/RelatedTo",
                "@type": "Relation",
                "label": "RelatedTo"
            },
            "sources": [
                {
                    "@id": "/and/[/s/process/split_words/,/s/resource/verbosity/]",
                    "@type": "Source",
                    "contributor": "/s/resource/verbosity",
                    "process": "/s/process/split_words"
                },
                {
                    "@id": "/s/resource/verbosity",
                    "@type": "Source",
                    "contributor": "/s/resource/verbosity"
                }
            ],
            "start": {
                "@id": "/c/en/metal",
                "@type": "Node",
                "label": "metal",
                "language": "en",
                "term": "/c/en/metal"
            },
            "surfaceText": "[[metal]] is related to [[example]]",
            "weight": 0.657
        },
        {
            "@id": "/a/[/r/Synonym/,/c/nl/example/,/c/en/example/n/wp/musician/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/example/n/wp/musician",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, musician",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/nl/example",
                "@type": "Node",
                "label": "example",
                "language": "nl",
                "term": "/c/nl/example"
            },
            "surfaceText": null,
            "weight": 0.5
        },
        {
            "@id": "/a/[/r/Synonym/,/c/is/example/,/c/en/example/n/wp/musician/]",
            "@type": "Edge",
            "dataset": "/d/dbpedia/en",
            "end": {
                "@id": "/c/en/example/n/wp/musician",
                "@type": "Node",
                "label": "example",
                "language": "en",
                "sense_label": "n, musician",
                "term": "/c/en/example"
            },
            "license": "cc:by-sa/4.0",
            "rel": {
                "@id": "/r/Synonym",
                "@type": "Relation",
                "label": "Synonym"
            },
            "sources": [
                {
                    "@id": "/s/resource/dbpedia/2015/en",
                    "@type": "Source",
                    "contributor": "/s/resource/dbpedia/2015/en"
                }
            ],
            "start": {
                "@id": "/c/is/example",
                "@type": "Node",
                "label": "example",
                "language": "is",
                "term": "/c/is/example"
            },
            "surfaceText": null,
            "weight": 0.5
        }
    ],
    "version": "5.8.1",
    "view": {
        "@id": "/c/en/example?offset=0&limit=700",
        "@type": "PartialCollectionView",
        "comment": "There are more results. Follow the 'nextPage' link for more.",
        "firstPage": "/c/en/example?offset=0&limit=700",
        "nextPage": "/c/en/example?offset=700&limit=700",
        "paginatedProperty": "edges"
    }
};
