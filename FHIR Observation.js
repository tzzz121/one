var FindingObservation={
    "resourceType": "Observation",
    "id": "9013017",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2023-03-31T07:38:54.500+00:00",
      "source": "#rcZcBGU0hRpIbqmR",
      "profile": [ "https://203.64.84.150:58443/r5/fhir/StructureDefinition/ImageFindingObservationSDR4" ]
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">This is an image finding measurement</div>"
    },
    "extension": [ {
      "url": "https://203.64.84.150:58443/r5/fhir/StructureDefinition/FindingIDR4",
      "valueIdentifier": {
        "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=896973653",
        "value": "S2023-00135"
      }
    } ],
    "status": "final",
    "category": [ {
      "coding": [ {
        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
        "code": "imaging",
        "display": "Imaging"
      } ]
    } ],
    "code": {
      "coding": [ {
        "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
        "code": "image.finding",
        "display": "Image finding"
      } ]
    },
    "subject": {
      "reference": "Patient/10202404",
      "display": "林子愔"
    },
    "effectiveDateTime": "2015-02-07T13:28:17-05:00",
    "performer": [ {
      "reference": "Practitioner/10202406",
      "display": "Dr. Adam Careful"
    } ],
    "bodySite": {
      "coding": [ {
        "system": "http://snomed.info/sct",
        "code": "7769000",
        "display": "Right foot"
      } ]
    },
    "component": [ {
      "code": {
        "coding": [ {
          "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
          "code": "image.finding.keyimage"
        } ]
      },
      "valueString": "https://203.64.84.150:58443/r5/fhir/DocumentReference/665f781e-5666-4e22-a3c9-638d23ca1043"
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682455"
        } ]
      },
      "valueString": "Normal nasopharynx, oropharynx and hypopharynx."
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682441"
        } ]
      },
      "valueString": "Normal including tongue and floor of mouth."
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682447"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682451"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682455"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "CHECKBOX_1586884758272"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682474"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1587066441136"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1587066441139"
        } ]
      }//111
    } , {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1587066441142"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682477"
        } ]
      }
    } , {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "CHECKBOX_1587066441153"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682484"
        } ]
      }
    } , {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682489"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682492"
        } ]
      }
    } , {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682497"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682502"
        } ]
      }
    } , {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682505"
        } ]
      }
    }, {
      "code": {
        "coding": [ {
          "system": "Codesystem/TCUMIH707",
          "code": "RADIO_1586550682509"
        } ]
      }
    } ]
  }